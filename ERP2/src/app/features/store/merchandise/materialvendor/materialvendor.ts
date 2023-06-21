export interface Materialvendor {
  id: string;
  material: any;
  vendor: any;
  purchase_uom:any;
  unit_price:number;
  other_charges:number;
  currency:any;
  remarks: string;
  mat_supplier_name:string;
  min_order_qty :string;
  lead_time :string;
  speed_lead_time :string;
  sample_time :string;
  lead_time_remarks :string;
  width:string;
  width_uom: any;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
