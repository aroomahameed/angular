export interface Transaction {
  id: string;
  date: string;
  amount: number;
  details: string;
  voucher: any;
  postings: any[];
  status: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Posting {
  id: string;
  amount: number;
  account: any;
  transaction: any;
  is_debit: boolean;
  status: boolean;
  created_at?: string;
  updated_at?: string;
}
