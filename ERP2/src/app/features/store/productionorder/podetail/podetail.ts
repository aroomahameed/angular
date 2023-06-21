export interface Podetail {
  id: string;
  production_order:any;
  production_order_sub:any;
  article_size:any;
  technical_size:string;
  order_qty:string;
  over_production:string;
  adjust_from_stock:string;
  adjusted_po:string;
  unit_price :string;
  extra_charges :string;
  any_other_charges:string;
  replacement_qty :string;
  order_status:boolean;
  res_status :boolean;
  plan_status:boolean;
  dispatch_status:boolean;
  lock_status :boolean;
  qc_status :boolean;
  res_date :string;
  plan_date :string;
  qc_date :string;
  dispatch_date :String;
  replacement_date:String;
  pr_number :string;
  class_code :string;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}


