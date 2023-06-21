import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {Client, loadClients, selectAllClients } from '../../../store/customer/client';
import { Customer,selectByClientID,loadCustomers } from '../../../store/customer/customer';
import { Serviceidentifier,addServiceidentifier } from '../../../store/customer/serviceidentifier';
@Component({
  selector: 'smart-idenifirer-form',
  templateUrl: './idenifirer-form.component.html',
  styleUrls: ['./idenifirer-form.component.css']
})
export class IdenifirerFormComponent implements OnInit {
  title="Add";
  fg: FormGroup;
  submitted = false;
  serviceidentifier:Serviceidentifier;
  clients: Observable<Client[]>
  customers: Observable<Customer[]>
  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder,private store: Store<any>) { }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadClients())
    this.clients = this.store.select(selectAllClients)
    this.store.dispatch(loadCustomers())
    if(this.serviceidentifier){

      this.customers = this.store.select(selectByClientID, this.serviceidentifier.client)
    }

  }
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.serviceidentifier?this.serviceidentifier.id:null],
      client: [this.serviceidentifier?this.serviceidentifier.client:null,Validators.required],
      customer: [this.serviceidentifier?this.serviceidentifier.customer:null ,Validators.required],
      name: [this.serviceidentifier?this.serviceidentifier.name:'',Validators.required],
      identifier: [this.serviceidentifier?this.serviceidentifier.identifier:'',Validators.required],
      f1: [this.serviceidentifier?this.serviceidentifier.f1:'',],
      f2: [this.serviceidentifier?this.serviceidentifier.f2:'',],
      f3: [this.serviceidentifier?this.serviceidentifier.f3:'',],
      f4: [this.serviceidentifier?this.serviceidentifier.f4:'',],
      f5: [this.serviceidentifier?this.serviceidentifier.f5:'',],
      status: [this.serviceidentifier?this.serviceidentifier.status:'']
    });
  }

  onChangeClient(event){
    console
    this.customers = this.store.select(selectByClientID, event)
  }

  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch(addServiceidentifier({data: this.fg.value}));
  
 
  
  }
}
