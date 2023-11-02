import { Employee } from "src/app/supplier/model/employee";
import { Sender } from "./sender";
import { Destination } from "./destination";

export interface shipmentBackend {

  id: number;
  description: string;
  code: number;
  freight: number;
  quantity: number;
  deliveredDate: Date;
  arrivalDate: Date;
  consignee: string;
  destination: Destination;
}
