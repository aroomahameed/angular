export interface Quotationitem {
  id: string;
  quote:any;
  material:any;
  uom :any;
  quantity :number;
  unit_price:number;
  tax :any;
  sub_total:number;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
