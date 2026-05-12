export interface Vendor {
  id :string;
  vendor_group :any;
  name :string;
  code:string;
  status: boolean;
  contact_person:string;
  title :string;
  address:string;
  city:string;
  phone :string;
  mobile :string;
  fax :string;
  ntn :string;
  sale_tax_no :string;
  customer_no:string;
  email:string;
  country:any;
  currency:any;
  payment_term:any;
  min_order:string;
  max_order:string;
  region :any;
  creation_date?: string;
  update_date?: string;

}
