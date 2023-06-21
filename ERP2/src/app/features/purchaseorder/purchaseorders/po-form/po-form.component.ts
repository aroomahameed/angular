import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Purchaseorder, addPurchaseorder, selectCurrentPurchaseorderSuccess, selectCurrentPurchaseorder } from '../../../store/purchaseorder/purchaseorder';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Purchaseorderitem, loadPurchaseorderitems, deletePurchaseorderitem, selectItembyPOID, addPurchaseorderitem } from '../../../store/purchaseorder/purchaseorderitem'
import { map } from 'rxjs/operators';
import { selectAllVendors, loadVendors, Vendor } from '../../../store/settings/vendor';
import { selectAllPaymentterms, loadPaymentterms, Paymentterm } from '../../../store/settings/paymentterm';
import { selectAllPoothercharges, loadPoothercharges, Poothercharge } from '../../../store/purchaseorder/poothercharge';
import { selectAllTransportmodes, loadTransportmodes, Transportmode} from '../../../store/purchaseorder/transportmode';
import { selectAllMaterials, loadMaterials, Material } from '../../../store/merchandise/material'
import { selectAllUoms, loadUoms, Uom } from '../../../store/settings/uom'
import { selectAllTaxes, loadTaxes, Tax } from '../../../store/purchaseorder/tax'
@Component({
  selector: 'smart-po-form',
  templateUrl: './po-form.component.html',
  styleUrls: ['./po-form.component.css']
})
export class PoFormComponent implements OnInit {
  poitmes: Purchaseorderitem;
  items: Observable<Purchaseorderitem[]>
  vendor: Observable<Vendor[]>
  paymentterm: Observable<Paymentterm[]>
  poothercharge: Observable<Poothercharge[]>
  transportmodes:Observable<Transportmode[]>
  materials: Observable<Material[]>
  uoms: Observable<Uom[]>
  taxes: Observable<Tax[]>
  purchaseorder: Purchaseorder;
  currentOrder: Observable<Purchaseorder>;
  POId
  total: Observable<number>;
  tax_total: Observable<number>;
  net_total: Observable<number>;
  fg: FormGroup;
  fh: FormGroup;
  submitted = false;
  title = 'Add';

  public error: any;
  columns: TableData[] = [
    { title: 'Material Name', value: ['material', 'name'], sortable: true },
    { title: 'Quantity', value: 'quantity', sortable: true },
    { title: 'Unit Price', value: 'unit_price', sortable: true, money: true },
    { title: 'Sub Total', value: 'sub_total', sortable: true, money: true },
    { title: 'Status', value: 'status', bool: true, boolText: { yes: 'Active', no: 'In-Active' } },
  ]


  ngOnInit() {
    this.buildForm();
    this.buildForm1();
    this.store.dispatch(loadVendors())
    this.vendor = this.store.select(selectAllVendors)
    this.store.dispatch(loadPaymentterms())
    this.paymentterm = this.store.select(selectAllPaymentterms)
    this.store.dispatch(loadPoothercharges())
    this.poothercharge = this.store.select(selectAllPoothercharges)
    this.store.dispatch(loadTransportmodes())
    this.transportmodes = this.store.select(selectAllTransportmodes)
    this.store.dispatch(loadMaterials())
    this.materials = this.store.select(selectAllMaterials)
    this.store.dispatch(loadUoms())
    this.uoms = this.store.select(selectAllUoms)
    this.store.dispatch(loadTaxes())
    this.taxes = this.store.select(selectAllTaxes)
    this.store.dispatch(loadPurchaseorderitems())
    if (this.purchaseorder) {
      this.store.dispatch(selectCurrentPurchaseorderSuccess({ data: this.purchaseorder }))
      this.currentOrder = this.store.select(selectCurrentPurchaseorder);
      this.currentOrder.subscribe(data => {
        if (data) {
          this.purchaseorder = data;
          this.POId = data.id;
          this.items = this.store.select(selectItembyPOID, this.purchaseorder.id)
          this.buildForm1()
       
        }

      })
      this.items = this.store.select(selectItembyPOID, this.purchaseorder.id )
      this.total = this.items.pipe(
        map(pitems => pitems.reduce((total, item) => parseInt(total.toString()) + parseInt((item.quantity*item.unit_price).toString()), 0)),
        map(data => data)
      )
      this.tax_total = this.items.pipe(
        map(pitems => pitems.reduce((tax_total, item) => parseFloat(tax_total.toString()) + parseFloat((item.quantity*item.unit_price).toString()) / parseInt(item.tax.percent.toString()), 0)),
        map(data => data)
      )
      this.net_total = this.items.pipe(
        map(pitems => pitems.reduce((net_total, item) => parseFloat(net_total.toString()) + parseFloat((item.quantity*item.unit_price).toString()) + parseFloat((item.quantity*item.unit_price).toString()) / parseInt(item.tax.percent.toString()), 0)),
        map(data => data)
      )
    }
   
  }

  constructor(private modalService: BsModalService, private fb: FormBuilder, private fb1: FormBuilder, private store: Store<any>) {
  }

  get f() { return this.fg.controls; }
  get g() { return this.fh.controls; }
  private buildForm() {
    this.fg = this.fb.group({
      id: [this.purchaseorder ? this.purchaseorder.id : null],
      vendor: [this.purchaseorder ? this.purchaseorder.vendor.id : null, Validators.required],
      req_date: [this.purchaseorder ? this.purchaseorder.req_date : '', Validators.required],
      date: [this.purchaseorder ? this.purchaseorder.date : '', Validators.required],
      deliver_to: [this.purchaseorder ? this.purchaseorder.deliver_to : '',],
      purchaser: [this.purchaseorder ? this.purchaseorder.purchaser : ''],
      billing_status: [this.purchaseorder ? this.purchaseorder.billing_status : ''],
      payment_term: [this.purchaseorder ? this.purchaseorder.payment_term.id : null],
      other_charges: [this.purchaseorder ? this.purchaseorder.other_charges.id : null,],
      special_note: [this.purchaseorder ? this.purchaseorder.special_note : ''],
      discount: [this.purchaseorder ? this.purchaseorder.discount : 0],
      trans_mode: [this.purchaseorder ? this.purchaseorder.trans_mode.id : null],
      status: [this.purchaseorder ? this.purchaseorder.status : true, Validators.required],
    });
  }
  private buildForm1() {
    this.fh = this.fb1.group({
      id: [this.poitmes ? this.poitmes.id : null],
      po: [this.poitmes ? this.poitmes.po.id : this.POId, Validators.required],
      material: [this.poitmes ? this.poitmes.material.id : null, Validators.required],
      uom: [this.poitmes ? this.poitmes.uom.id : null, Validators.required],
      quantity: [this.poitmes ? this.poitmes.quantity : '',],
      unit_price: [this.poitmes ? this.poitmes.unit_price : ''],
      tax: [this.poitmes ? this.poitmes.tax.id : null],
      rec_status: [this.poitmes ? this.poitmes.rec_status : true, Validators.required],
      status: [this.poitmes ? this.poitmes.status : true, Validators.required],
    });
  }
  onSubmit(event) {

    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;
 
    this.store.dispatch(addPurchaseorder({ data: this.fg.value }));
    this.store.select(selectCurrentPurchaseorder).subscribe(data => {

      if (data !== null) {
        this.purchaseorder = data;
        this.POId = data.id;
        this.items = this.store.select(selectItembyPOID, data.id)
        console.log(this.items);
        this.buildForm1();
        this.items = this.store.select(selectItembyPOID, this.purchaseorder.id )
      this.total = this.items.pipe(
        map(pitems => pitems.reduce((total, item) => parseInt(total.toString()) + parseInt((item.quantity*item.unit_price).toString()), 0)),
        map(data => data)
      )
      this.tax_total = this.items.pipe(
        map(pitems => pitems.reduce((tax_total, item) => parseFloat(tax_total.toString()) + parseFloat((item.quantity*item.unit_price).toString()) / parseInt(item.tax.percent.toString()), 0)),
        map(data => data)
      )
      this.net_total = this.items.pipe(
        map(pitems => pitems.reduce((net_total, item) => parseFloat(net_total.toString()) + parseFloat((item.quantity*item.unit_price).toString()) + parseFloat((item.quantity*item.unit_price).toString()) / parseInt(item.tax.percent.toString()), 0)),
        map(data => data)
      )
      }
    })

  }
  onSubmititem(event) {

    Object.keys(this.fh.controls).forEach(field => {
      const control = this.fh.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fh.invalid) return;

    //this.fh.patchValue({ sub_total: this.fh.value['quantity'] * this.fh.value['unit_price'] })
    this.store.dispatch(addPurchaseorderitem({ data: this.fh.value }));

  }

  onEdit(event) {
    this.poitmes = event;
    this.buildForm1();
  }
  ondelete(id: Purchaseorderitem) {
    if (confirm("Are you sure to want to delete this row")) {
      this.store.dispatch(deletePurchaseorderitem({ data: id }))

    }
  }
  onClear() {
    this.poitmes = null;
    this.buildForm1();
  }


}
