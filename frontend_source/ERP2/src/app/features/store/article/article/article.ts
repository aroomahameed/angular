export interface Article {
  id: string;
  name: string;
  client:any;
  model:any;
  
  art_number:string;
  color :string;
  first_season:any;
  description:string;
  ready_date:string;
  ready_status:boolean;
  mer_date:string;
  mer_status:boolean;
  ready_closing_date :string;
  image:any;
  shape:string
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
