export interface Pohead {
  id: string;
  client :any;
  customer :any;
  factory :any;
  identifier:any;
  delay_reason :any;
  po_number :string;
  customer_order_no:string;
  entry_date:string;
  customer_req_date :string;
  production_date:string;
  delivery_date :string;
  last_ship_date:string;
  ship_mode :string;
  payment_mode :string;
  order_type :string;
  order_status :string;
  cancel_date :string;
  mtfc_no :string
  lock_status :string
  description:string;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
