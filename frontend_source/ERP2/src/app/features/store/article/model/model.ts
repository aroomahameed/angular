export interface Model {
  id: string;
  name: string;
  code: string;
  client :any;
  season:any;
  category:any;
  range:any;
  working_no :string;
  event_desc:string;
  ad_path :string;
  factory :any;
  description:string;
  edit_status:boolean;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
