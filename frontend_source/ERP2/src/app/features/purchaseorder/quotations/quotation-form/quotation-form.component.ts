import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Quotation, addQuotation, selectCurrentQuotationSuccess, selectCurrentQuotation } from '../../../store/purchaseorder/quotation';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Quotationitem, loadQuotationitems, deleteQuotationitem, selectQuotationItemsByQuotationID, selectItembyQuoteID, addQuotationitem } from '../../../store/purchaseorder/quotationitem'
import { map } from 'rxjs/operators';
import { selectAllVendors, loadVendors, Vendor } from '../../../store/settings/vendor';
import { selectAllPaymentterms, loadPaymentterms, Paymentterm } from '../../../store/settings/paymentterm';
import { selectAllPoothercharges, loadPoothercharges, Poothercharge } from '../../../store/purchaseorder/poothercharge';
import { selectAllMaterials, loadMaterials, Material } from '../../../store/merchandise/material'
import { selectAllUoms, loadUoms, Uom } from '../../../store/settings/uom'
import { selectAllTaxes, loadTaxes, Tax } from '../../../store/purchaseorder/tax'
@Component({
  selector: 'smart-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css']
})
export class QuotationFormComponent implements OnInit {
  quotationitmes: Quotationitem;
  items: Observable<Quotationitem[]>
  vendor: Observable<Vendor[]>
  paymentterm: Observable<Paymentterm[]>
  poothercharge: Observable<Poothercharge[]>
  materials: Observable<Material[]>
  uoms: Observable<Uom[]>
  taxes: Observable<Tax[]>
  quotation: Quotation;
  currentQuote: Observable<Quotation>;
  quotationId
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
    this.store.dispatch(loadMaterials())
    this.materials = this.store.select(selectAllMaterials)
    this.store.dispatch(loadUoms())
    this.uoms = this.store.select(selectAllUoms)
    this.store.dispatch(loadTaxes())
    this.taxes = this.store.select(selectAllTaxes)
    this.store.dispatch(loadQuotationitems())


    if (this.quotation) {

      this.store.dispatch(selectCurrentQuotationSuccess({ data: this.quotation }))
      this.currentQuote = this.store.select(selectCurrentQuotation);
      this.currentQuote.subscribe(data => {
        if (data) {
          this.quotation = data;
          this.quotationId = data.id;
          this.items = this.store.select(selectItembyQuoteID, this.quotation.id)
          this.buildForm1()
       
        }

      })
      this.items = this.store.select(selectItembyQuoteID, this.quotation.id )
      this.total = this.items.pipe(
        map(qitems => qitems.reduce((total, item) => parseInt(total.toString()) + parseInt(item.sub_total.toString()), 0)),
        map(data => data)
      )
      this.tax_total = this.items.pipe(
        map(qitems => qitems.reduce((tax_total, item) => parseFloat(tax_total.toString()) + parseFloat(item.sub_total.toString()) / parseInt(item.tax.percent.toString()), 0)),
        map(data => data)
      )
      this.net_total = this.items.pipe(
        map(items => items.reduce((net_total, item) => parseFloat(net_total.toString()) + parseFloat(item.sub_total.toString()) + parseFloat(item.sub_total.toString()) / parseInt(item.tax.percent.toString()), 0)),
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
      id: [this.quotation ? this.quotation.id : null],
      vendor: [this.quotation ? this.quotation.vendor.id : null, Validators.required],
      req_date: [this.quotation ? this.quotation.req_date : '', Validators.required],
      date: [this.quotation ? this.quotation.date : '', Validators.required],
      deliver_to: [this.quotation ? this.quotation.deliver_to : '',],
      purchaser: [this.quotation ? this.quotation.purchaser : ''],
      billing_status: [this.quotation ? this.quotation.billing_status : ''],
      payment_term: [this.quotation ? this.quotation.payment_term.id : null, Validators.required],
      other_charges: [this.quotation ? this.quotation.other_charges.id : null],
      special_note: [this.quotation ? this.quotation.special_note : ''],
      status: [this.quotation ? this.quotation.status : '', Validators.required],
    });
  }
  private buildForm1() {
    this.fh = this.fb1.group({
      id: [this.quotationitmes ? this.quotationitmes.id : null],
      quote: [this.quotationitmes ? this.quotationitmes.quote.id : this.quotationId, Validators.required],
      material: [this.quotationitmes ? this.quotationitmes.material.id : null, Validators.required],
      uom: [this.quotationitmes ? this.quotationitmes.uom.id : null, Validators.required],
      quantity: [this.quotationitmes ? this.quotationitmes.quantity : '',],
      unit_price: [this.quotationitmes ? this.quotationitmes.unit_price : ''],
      tax: [this.quotationitmes ? this.quotationitmes.tax.id : null],
      sub_total: [this.quotationitmes ? this.quotationitmes.sub_total : 0, Validators.required],
      status: [this.quotationitmes ? this.quotationitmes.status : '', Validators.required],
    });
  }
  onSubmit(event) {

    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch(addQuotation({ data: this.fg.value }));
    this.store.select(selectCurrentQuotation).subscribe(data => {

      if (data !== null) {
        this.quotation = data;
        this.quotationId = data.id;
        this.items = this.store.select(selectItembyQuoteID, data.id)
        this.buildForm1();
        this.items = this.store.select(selectItembyQuoteID, this.quotation.id )
        this.total = this.items.pipe(
          map(qitems => qitems.reduce((total, item) => parseInt(total.toString()) + parseInt(item.sub_total.toString()), 0)),
          map(data => data)
        )
        this.tax_total = this.items.pipe(
          map(qitems => qitems.reduce((tax_total, item) => parseFloat(tax_total.toString()) + parseFloat(item.sub_total.toString()) / parseInt(item.tax.percent.toString()), 0)),
          map(data => data)
        )
        this.net_total = this.items.pipe(
          map(items => items.reduce((net_total, item) => parseFloat(net_total.toString()) + parseFloat(item.sub_total.toString()) + parseFloat(item.sub_total.toString()) / parseInt(item.tax.percent.toString()), 0)),
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

    this.fh.patchValue({ sub_total: this.fh.value['quantity'] * this.fh.value['unit_price'] })
    this.store.dispatch(addQuotationitem({ data: this.fh.value }));

  }

  onEdit(event) {
    this.quotationitmes = event;
    this.buildForm1();
  }
  ondelete(id: Quotationitem) {
    if (confirm("Are you sure to want to delete this row")) {
      this.store.dispatch(deleteQuotationitem({ data: id }))

    }
  }
  onClear() {
    this.quotationitmes = null;
    this.buildForm1();
  }

}
