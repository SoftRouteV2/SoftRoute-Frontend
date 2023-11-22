import { Shipment } from "./shipment";

export interface Package {

  id: number;
  description: string;
  code: number;
  weight: number;
  length: number;
  width: number;
  height: number;

}
