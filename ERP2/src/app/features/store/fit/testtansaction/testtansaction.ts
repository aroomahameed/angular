export interface Testtansaction {
  id: string;
  name: string;
  start_date: string;
  end_date: string
  lab_no: string
  remarks: string
  materials: any[];
  status: boolean;
  creation_date?: string;
  update_date?: string;

}
