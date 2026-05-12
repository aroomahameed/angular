export interface Labball {
  id: string;
  date :string;
  return_date :string;
  article_no: any;
  prd_month :string;
  qty_received:string;
  qty_returned :string;
  purpose :string;
  sender_ref:string;
  sender_name :string;
  receiver_name:string;
  returned_person_name :string;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
