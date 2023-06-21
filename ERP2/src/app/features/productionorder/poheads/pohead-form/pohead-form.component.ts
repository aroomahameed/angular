import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import {  Pohead ,addPohead,selectAllPoheads ,selectCurrentPohead,loadPoheads,} from '../../../store/productionorder/pohead';
import { Store } from '@ngrx/store';
import { Observable,of } from 'rxjs';
import {Client ,loadClients,selectAllClients} from '../../../store/customer/client';
import {Customer ,loadCustomers,selectAllCustomers,selectByClientID} from '../../../store/customer/customer';
import {Factorycode ,loadFactorycodes,selectAllFactorycodes} from '../../../store/settings/factorycode';
import { Router } from '@angular/router';
import {Serviceidentifier ,loadServiceidentifiers,selectAllServiceidentifiers} from '../../../store/customer/serviceidentifier';
import {Delayreasoncode ,loadDelayreasoncodes,selectAllDelayreasoncodes} from '../../../store/productionorder/delayreasoncode';


@Component({
  selector: 'smart-pohead-form',
  templateUrl: './pohead-form.component.html',
  styleUrls: ['./pohead-form.component.css']
})
export class PoheadFormComponent implements OnInit {
  fg:FormGroup;
  title="Add";
  pohead:Pohead;
  submitted = false;
  client: Observable<Client[]>
  customer: Observable<Customer[]>
  factorycode: Observable<Factorycode[]>
  serviceidentifier: Observable<Serviceidentifier[]>
  delayreasoncode: Observable<Delayreasoncode[]>
  poheads:Pohead;
  orderStatus = ""

  shipmode = of([{ id: 'By Sea', name: 'By Sea' }, { id: 'By Air', name: 'By Air' },{ id: 'By Courier', name: 'By Courier' }])
  paymentmode = of([{ id: 'Collect', name: 'Collect' }, { id: 'Prepaid', name: 'Prepaid' }])
  ordertype = of([{ id: 'Production', name: 'Production' }, { id: 'Development', name: 'Development' }])
  orderstatus = of([{ id: 'Confirm', name: 'Confirm' }, { id: 'Cancel', name: 'Cancel' },{ id: 'Delay', name: 'Delay' }])
  constructor(private fb: FormBuilder,private store: Store<any>,) { }
  get f() { return this.fg.controls; }
  ngOnInit() {

    this.buildForm();
    this.store.dispatch(loadClients())
    this.client = this.store.select(selectAllClients)
    this.store.dispatch(loadCustomers())
    // this.customer = this.store.select(selectAllCustomers)
    this.store.dispatch(loadFactorycodes())
    this.factorycode = this.store.select(selectAllFactorycodes)
    this.store.dispatch(loadServiceidentifiers())
    this.serviceidentifier = this.store.select(selectAllServiceidentifiers)
    this.store.dispatch(loadDelayreasoncodes())
    this.delayreasoncode = this.store.select(selectAllDelayreasoncodes)
    this.store.dispatch(loadPoheads())
    // this.poheads = this.store.select(selectAllPoheads)

    // this.store.select(selectCurrentPohead).subscribe(data => {
    //   if (data !== null) {
    //     this.poheads = data;
        
    //   }
    
    // })
    if(this.pohead){
      this.customer = this.store.select(selectByClientID, this.pohead.client.id)
      this.orderStatus = this.pohead.order_status;
     
    }

  }
  onChangeClient(event){
    this.customer = this.store.select(selectByClientID, event)
  }
 
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.pohead?this.pohead.id:null],
      po_number: [this.pohead?this.pohead.po_number:'',Validators.required],
      client:[this.pohead?this.pohead.client.id:null,Validators.required],
      customer:[this.pohead?this.pohead.customer.id:null,Validators.required],
      factory:[this.pohead?this.pohead.factory:null,Validators.required],
      identifier:[this.pohead?this.pohead.identifier:null,Validators.required],
      delay_reason:[this.pohead?this.pohead.delay_reason:null,Validators.required],
      customer_order_no:[this.pohead?this.pohead.customer_order_no:'',Validators.required],
      entry_date:[this.pohead?this.pohead.entry_date:'',Validators.required],
      customer_req_date:[this.pohead?this.pohead.customer_req_date:'',Validators.required],
      production_date:[this.pohead?this.pohead.production_date:'',Validators.required],
      delivery_date:[this.pohead?this.pohead.delivery_date:'',Validators.required],
      last_ship_date:[this.pohead?this.pohead.last_ship_date:'',Validators.required],
      ship_mode:[this.pohead?this.pohead.ship_mode:null,Validators.required],
      payment_mode:[this.pohead?this.pohead.payment_mode:null,Validators.required],
      order_type:[this.pohead?this.pohead.order_type:null,Validators.required],
      order_status:[this.pohead?this.pohead.order_status:null,Validators.required],
      cancel_date:[this.pohead?this.pohead.cancel_date:null],
      mtfc_no:[this.pohead?this.pohead.mtfc_no:'',Validators.required],
      lock_status:[this.pohead?this.pohead.lock_status:'',Validators.required],
      description:[this.pohead?this.pohead.description:'',Validators.required],
      status: [this.pohead?this.pohead.status:true]
     
    });
  }

  onStatusChange(event){
    this.orderStatus = event;
  }
  onSubmit(event) {
    // Object.keys(this.fg.controls).forEach(field => {
    //   const control = this.fg.get(field);
    //   control.markAsTouched({ onlySelf: true });
    //   control.markAsDirty({ onlySelf: true });
    // });
    // if (this.fg.invalid) return;
    this.store.dispatch(addPohead({data: this.fg.value}));
    
    // this.store.select(selectCurrentPohead).subscribe(data => {
    //   if (data !== null) {
    //     this.pohead = data;
    //     this.poheadId = data.id;
    //   }
    //   console.log(this.poheadId)
    // })

  }
}
