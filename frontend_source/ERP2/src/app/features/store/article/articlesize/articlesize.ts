export interface Articlesize {
  id: string;
  client:any;
  model:any;
  article:any;
  carton:any;
  size :string;
  customer_size :string;
  manufacturing_size :string;
  qty_per_carton:string;
  dimension :string;
  barcode :string;
  ean_barcode:string;
  upc_barcode:string;
  any_other_barcode:string;
  tac_time:string;
  description:string;
  reference:string;
  base_uom :any;
  weight_uom:any;
  unit_price :string;
  sale_price :string;
  net_weight:string;
  net_net_weight:string;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
