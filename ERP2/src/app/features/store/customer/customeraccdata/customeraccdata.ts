export interface Customeraccdata {
  id: string;
  code: string;
  customer: any;
  currency: any;
  vat_no: string;
  gst_no: string;
  ntn_no: string;
  payment_term: any;
  acc_group: any;
  bank_name: string;
  bank_account_no: string;
  bank_account_name: string;
  bank_swift_code: string;
  bank_iba: string;
  payment_tolerance: string;
  credit_limit: string;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
