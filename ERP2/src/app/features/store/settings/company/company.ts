export interface Company {
  id: string;
  name: string;
  code: string;
  legal_name :string;
  owner_name :string;
  country:any;
  logo :string;
  reg_date :string;
  address :string;
  email :string;
  phone :string;
  fax :string;
  vat :string;
  gst:string;
  ntn :string;
  website :string;
  invoice_email :string;
  admin_name :string;
  admin_email :string;
  admin_phone :string;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
