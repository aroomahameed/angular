export interface Articlematerial {
  id: string;
  client:any;
  model:any;
  article:any;
  carton:any;
  size :any;
  production_line:any;
  material:any
  serial_no:string;
  base_uom:any;
  width:string;
  length:string;
  height :string;
  cutting_time:string
  mat_formula:string
  mat_extra:string
  total_formula:string
  eou_formula:string;
  mat_wastage :string;
  mat_description :string;
  process_id :string
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
