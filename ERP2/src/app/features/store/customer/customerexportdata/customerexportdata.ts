export interface Customerexportdata {
  id: string;
  customer:any;
  deliveryTo:string;
  sea_port:string;
  air_port:string;
  sea_consignee:string;
  sea_consignee1:string;
  sea_notify_party:string;
  sea_notify_party2:string;
  air_consignee:string;
  air_consignee1:string;
  air_notify_party:string;
  air_notify_party1:string;
  gsp_sea_consignee:string;
  gsp_air_consignee:string;
  beneficiary_consignee:string;
  exp_country:any;
  air_forwarder:any;
  sea_forwarder:any;
  invoice_to:string;
  carton_option:boolean;
  sea_notify:string;
  air_notify:string;
  is_damco: boolean;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
