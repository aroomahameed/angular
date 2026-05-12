export interface Carton {
  id: string;
  name: string;
  length:string
  width:string;
  height:string
  weight:String
  unit:any;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
