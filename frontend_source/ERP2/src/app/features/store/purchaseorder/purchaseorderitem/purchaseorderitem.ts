export interface Purchaseorderitem {
  id: string;
  po:any;
  material:any;
  uom :any;
  quantity :number;
  unit_price:number;
  tax :any;
  rec_status:boolean;
  status: boolean;
  creation_date?: string;
  update_date?: string;
}
