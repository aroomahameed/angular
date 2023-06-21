export interface Quotation {
  id: string;
  vendor: any;
  req_date: string;
  date: string;
  deliver_to: string;
  purchaser: string;
  billing_status: string;
  payment_term: any;
  other_charges: any;
  special_note: string;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
