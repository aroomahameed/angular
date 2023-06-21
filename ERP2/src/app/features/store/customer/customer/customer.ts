export interface Customer {
  id: string;
  name: string;
  client:any;
  code: string;
  full_name:string;
  address:string;
  city:string;
  phone:string;
  email:string;
  mobile:string;
  fax:string;
  region:any;
  min_order:string;
  lead_time:string;
  customized_field1:string;
  customized_field2:string;
  contact_person:string;
  contact_person_department:string;
  contact_person_title:string;
  contact_person_phone:string;
  contact_person_email:string;
  country:any;
  is_adidas:boolean;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
