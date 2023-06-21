export interface Reservepo {
  id: string;
  production_order:any;
  production_order_sub:any;
  production_order_Detail :any;
  po_number :string;
  client :any;
  customer  :any;
  identifier :any;
  factory  :any;
  req_date :string;
  prd_date :string;
  article :any;
  model :any;
  article_size :any;
  orderQty :string;
  article_pl :any;
  material  :any;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
