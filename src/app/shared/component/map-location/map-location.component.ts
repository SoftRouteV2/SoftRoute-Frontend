///<reference path="../../../../../node_modules/@types/googlemaps/index.d.ts"/>
import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-map-location',
  templateUrl: './map-location.component.html',
  styleUrls: ['./map-location.component.css']
})
export class MapLocationComponent implements OnInit{
  @ViewChild('divMap') divMap!: ElementRef;
  @ViewChild('inputPlaces') inputPlaces!: ElementRef;

  mapa!: google.maps.Map;
  markers: google.maps.Marker[];
  formMapas!: FormGroup;

  constructor(private renderer: Renderer2) {
    this.markers = [];

    this.formMapas = new FormGroup({
      busqueda: new FormControl(''),
      direccion: new FormControl(''),
      referencia: new FormControl(''),
      ciudad: new FormControl(''),
      provincia: new FormControl(''),
      region: new FormControl('')
    })
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        await this.cargarMapa(position);
        this.cargarAutocomplete();
      })
    } else {
      console.log("navegador no compatible")
    }
  };
  onSubmit() {
    console.log("Datos del formulario: ", this.formMapas.value)
  };
  private cargarAutocomplete() {

    // const autocomplete = new google.maps.places.Autocomplete(this.renderer.selectRootElement(this.inputPlaces.nativeElement), { })
    const autocomplete = new google.maps.places.Autocomplete(this.renderer.selectRootElement(this.inputPlaces.nativeElement), {
      componentRestrictions: {
        country: ["CL"]
      },
      fields: ["address_components", "geometry"],
      types: ["address"],
    })

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place: any = autocomplete.getPlace();
      console.log("el place completo es:", place)

      this.mapa.setCenter(place.geometry.location);
      const marker = new google.maps.Marker({
        position: place.geometry.location
      });

      marker.setMap(this.mapa);
      this.llenarFormulario(place);
    })
  }
  llenarFormulario(place: any) {

    console.log(place)
    const addressNameFormat: any = {
      'street_number': 'short_name',
      'route': 'long_name',
      'administrative_area_level_1': 'short_name',
      'administrative_area_level_2': 'short_name',
      'administrative_area_level_3': 'short_name',
      'country': 'long_name',

    };


    const getAddressComp = (type: any) => {
      for (const component of place.address_components) {
        if (component.types[0] === type) {

          return component[addressNameFormat[type]];
        }
      }
      return ' '
    };

    const componentForm = {
      direccion: 'location',
      ciudad: "administrative_area_level_3",
      provincia: 'administrative_area_level_2',
      region: 'administrative_area_level_1'
    };
    Object.entries(componentForm).forEach(entry => {
      const [key, value] = entry;
      console.log(key,value)
      this.formMapas.controls[key].setValue(getAddressComp(value))
    });

    this.formMapas.controls['direccion'].setValue(getAddressComp('route') + ' ' + getAddressComp('street_number'))
  };
  cargarMapa(position: any): any {
    const opciones = {

      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.mapa = new google.maps.Map(this.renderer.selectRootElement(this.divMap.nativeElement), opciones)

    const markerPosition = new google.maps.Marker({
      position: this.mapa.getCenter(),
      title: "David",
    });

    markerPosition.setMap(this.mapa);
    this.markers.push(markerPosition);

  };

}
