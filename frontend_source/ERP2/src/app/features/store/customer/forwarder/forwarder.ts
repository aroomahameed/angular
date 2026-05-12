export interface Forwarder {
  id: string;
  name: string;
  address:string;
  country:any;
  contact_person:string;
  phone:string;
  email:string;
  type:string;
  payment_term:any;
  financial_code:string;
  vat:string;
  gst:string;
  ntn:string;
  payment_tolerance :string;
  credit_limit:string;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
