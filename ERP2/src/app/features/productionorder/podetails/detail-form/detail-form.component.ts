import { selectCurrentPodetail, selectAllPodetails, Podetail, addPodetail } from '../../../store/productionorder/podetail';
import { selectCurrentPosub, selectAllPosubs, loadPosubs, selectByPOSubID, Posub } from '../../../store/productionorder/posub';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pohead, selectCurrentPohead, selectByPOID, selectAllPoheads, loadPoheads } from '../../../store/productionorder/pohead';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Articlesize, loadArticlesizes, selectByArticleID, selectBySizeID } from '../../../store/article/articlesize';
import { Reservepo, loadReservepos, addReservepo, selectByPO, deleteReservepo } from '../../../store/productionorder/reservepo';
import { Productionline, loadProductionlines, selectByArticlesizeID } from '../../../store/article/productionline';
import { Articlematerial, loadArticlematerials, selectByMaterialbyPrdID } from '../../../store/article/articlematerial';


@Component({
  selector: 'smart-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {
  fg: FormGroup;
  fh: FormGroup;
  title = "Add";
  podetail: Podetail;
  reservepo: Reservepo;
  submitted = false;
  posub: Posub;
  articleID;
  sizes: Observable<Articlesize[]>;
  posubs: Observable<Posub[]>;
  poheads: Observable<Pohead[]>;
  productionline: Observable<Productionline[]>;
  date = new Date().toISOString().slice(0, 10);
  constructor(private fb: FormBuilder, private store: Store<any>, private fb1: FormBuilder,) { }
  get f() { return this.fg.controls; }
  get g() { return this.fh.controls; }
  ngOnInit() {

    this.buildForm();
    this.store.dispatch(loadPoheads())
    // this.poheads = this.store.select(selectAllPoheads)
    this.store.dispatch(loadPosubs())
    this.store.dispatch(loadArticlesizes())
    this.posubs = this.store.select(selectAllPosubs)
    this.store.dispatch(loadProductionlines())
    this.store.dispatch(loadArticlematerials())
    this.store.dispatch(loadReservepos())
    if (this.posub) {
      this.poheads = this.store.select(selectByPOID, this.posub.production_order.id)
      this.posubs = this.store.select(selectByPOSubID, this.posub.id)
      this.sizes = this.store.select(selectByArticleID, this.posub.article.id)
    }
    if (this.podetail) {
      this.poheads = this.store.select(selectByPOID, this.podetail.production_order.id)
      this.posubs = this.store.select(selectByPOSubID, this.podetail.production_order_sub.id)
      this.sizes = this.store.select(selectBySizeID, this.podetail.article_size.id)
    }
  }
  private buildForm() {
    this.fg = this.fb.group({
      id: [this.podetail ? this.podetail.id : null],
      production_order: [this.posub ? this.posub.production_order.id : this.podetail ? this.podetail.production_order.id : null, Validators.required],
      production_order_sub: [this.posub ? this.posub.id : this.podetail ? this.podetail.production_order_sub.id : null, Validators.required],
      article_size: [this.podetail ? this.podetail.article_size.id : null, Validators.required],
      technical_size: [this.podetail ? this.podetail.technical_size : ''],
      order_qty: [this.podetail ? this.podetail.order_qty : 0, Validators.required],
      over_production: [this.podetail ? this.podetail.over_production : 0],
      adjust_from_stock: [this.podetail ? this.podetail.adjust_from_stock : 0],
      adjusted_po: [this.podetail ? this.podetail.adjusted_po : 0],
      unit_price: [this.podetail ? this.podetail.unit_price : 0, Validators.required],
      extra_charges: [this.podetail ? this.podetail.extra_charges : 0],
      any_other_charges: [this.podetail ? this.podetail.any_other_charges : 0],
      replacement_qty: [this.podetail ? this.podetail.replacement_qty : null],
      order_status: [this.podetail ? this.podetail.order_status : '', Validators.required],
      res_status: [this.podetail ? this.podetail.res_status : false, Validators.required],
      plan_status: [this.podetail ? this.podetail.plan_status : '', Validators.required],
      dispatch_status: [this.podetail ? this.podetail.dispatch_status : ''],
      lock_status: [this.podetail ? this.podetail.lock_status : '', Validators.required],
      qc_status: [this.podetail ? this.podetail.qc_status : ''],
      res_date: [this.podetail ? this.podetail.res_date : null],
      plan_date: [this.podetail ? this.podetail.plan_date : null],
      qc_date: [this.podetail ? this.podetail.qc_date : null],
      dispatch_date: [this.podetail ? this.podetail.dispatch_date : null],
      replacement_date: [this.podetail ? this.podetail.replacement_date : null],
      pr_number: [this.podetail ? this.podetail.pr_number : ''],
      class_code: [this.podetail ? this.podetail.class_code : ''],
      status: [this.podetail ? this.podetail.status : true]
    });
  }
  private buildForm1(productionline, material) {
    this.fh = this.fb1.group({
      id: [this.reservepo ? this.reservepo.id : null],
      production_order: [this.reservepo ? this.reservepo.production_order : this.podetail.production_order.id],
      production_order_sub: [this.reservepo ? this.reservepo.production_order_sub : this.podetail.production_order_sub.id],
      production_order_Detail: [this.reservepo ? this.reservepo.production_order_Detail.id : this.podetail.id],
      po_number: [this.reservepo ? this.reservepo.po_number : this.podetail.production_order.po_number],
      client: [this.reservepo ? this.reservepo.client : this.podetail.production_order.client.id],
      customer: [this.reservepo ? this.reservepo.customer : this.podetail.production_order.customer.id],
      identifier: [this.reservepo ? this.reservepo.identifier : this.podetail.production_order.idenetifier],
      factory: [this.reservepo ? this.reservepo.factory : this.podetail.production_order.factory],
      req_date: [this.reservepo ? this.reservepo.req_date : this.podetail.production_order.customer_req_date],
      prd_date: [this.reservepo ? this.reservepo.prd_date : this.podetail.production_order.production_date],
      article: [this.reservepo ? this.reservepo.article : this.podetail.production_order_sub.article.id],
      model: [this.reservepo ? this.reservepo.model : this.podetail.production_order_sub.model.id],
      article_size: [this.reservepo ? this.reservepo.article_size : this.podetail.article_size.id],
      orderQty: [this.reservepo ? this.reservepo.orderQty : this.podetail.order_qty],
      article_pl: [this.reservepo ? this.reservepo.article_pl : productionline],
      material: [this.reservepo ? this.reservepo.material : material],
      status: [this.reservepo ? this.reservepo.status : true],
    });
  }
  onSubmit(event) {
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch(addPodetail({ data: this.fg.value }));
  }
  createPRmonth() {
    var dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var factor = month;
    var pr_month;
    if (day > 15) {
      factor = +factor + month
    } else {
      factor = factor - 1
      factor = +factor + month
    }
    pr_month = 'SS-' + (factor > 9 ? factor : '0' + factor) + '-' + year;
    return pr_month
  }
  reserveMat(event) {
    
    let productionline = this.store.select(selectByArticlesizeID, this.podetail.article_size.id)
    productionline.subscribe(data => {
      console.log(data)
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          let material = this.store.select(selectByMaterialbyPrdID, data[i].id)
          material.subscribe(data2 => {
            console.log(data2)
            for (let j = 0; j < data2.length; j++) {
              this.buildForm1(data[i].id, data2[j].id)
              
              this.store.dispatch(addReservepo({ data: this.fh.value }));
            }
          }).unsubscribe();
        } 
      }
    }).unsubscribe()
    this.fg.patchValue({ res_status: true });
    this.fg.patchValue({ res_date: this.date });
    this.fg.patchValue({ pr_number: this.createPRmonth() });
    this.podetail.res_status = true;
    this.store.dispatch(addPodetail({ data: this.fg.value }));
    this.store.dispatch(loadReservepos())
  }
  undoreserveMat(event) {
    let productionline = this.store.select(selectByArticlesizeID, this.podetail.article_size.id)
    productionline.subscribe(data => {
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          let material = this.store.select(selectByMaterialbyPrdID, data[i].id)
          material.subscribe(data2 => {
            for (let j = 0; j < data2.length; j++) {
              this.store.select(selectByPO, {
                client: this.podetail.production_order.client.id,
                customer: this.podetail.production_order.customer.id,
                model: this.podetail.production_order_sub.model.id,
                article: this.podetail.production_order_sub.article.id,
                size: this.podetail.article_size.id,
                prdline: data[i].id,
                material: data2[j].id
              }).subscribe(dataa => {
                if (dataa.length > 0) {
                  for (let k = 0; k < dataa.length; k++) {
                    this.store.dispatch(deleteReservepo({ data: dataa[k] }))
                  }
                }

              }).unsubscribe();
            }

          }).unsubscribe();
        }
      }
    }).unsubscribe()
   this.fg.patchValue({ res_status: false });
    this.fg.patchValue({ res_date: null });
    this.fg.patchValue({ pr_number: '' });
    this.podetail.res_status = false;
    this.store.dispatch(addPodetail({ data: this.fg.value }));
    this.store.dispatch(loadReservepos()) 
  }


}
