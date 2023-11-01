import { Employee } from "src/app/supplier/model/employee";
import { Sender } from "./sender";

export interface Shipment {

  id: number;
  description: string;
  code: number;
  freight: number;
  quantity: number;
  deliveredDate: Date;
  arrivalDate: Date;
  consignee: string;

}
