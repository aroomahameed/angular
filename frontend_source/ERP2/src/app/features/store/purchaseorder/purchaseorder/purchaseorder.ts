export interface Purchaseorder {
  id: string;
  vendor:any;
  req_date:string;
  purchase_number:string;
  date :string;
  deliver_to :string;
  purchaser:string;
  trans_mode:any;
  billing_status :string;
  payment_term:any;
  other_charges :any;
  discount:number;
  special_note: string;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
