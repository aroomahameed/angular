import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Materialvendor,addMaterialvendor } from '../../../store/merchandise/materialvendor';
import { Vendor,loadVendors,selectAllVendors } from '../../../store/settings/vendor';
import { Currency,loadCurrencies,selectAllCurrencies } from '../../../store/settings/currency';
import { Uom ,loadUoms,selectAllUoms} from '../../../store/settings/uom';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'smart-materialvendor-form',
  templateUrl: './materialvendor-form.component.html',
  styleUrls: ['./materialvendor-form.component.css']
})
export class MaterialvendorFormComponent implements OnInit {
  vendors: Observable<Vendor[]>;
  currencys: Observable<Currency[]>;
  uoms: Observable<Uom[]>;
  materialvendor: Materialvendor;
  fg: FormGroup;
  submitted = false;
  title = 'Add';
  material:any;
constructor(private fb: FormBuilder, private store: Store<any>) {
   }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadVendors());
    this.vendors = this.store.select(selectAllVendors);
    this.store.dispatch(loadCurrencies());
    this.currencys = this.store.select(selectAllCurrencies);
    this.store.dispatch(loadUoms());
    this.uoms = this.store.select(selectAllUoms);
  }

  // convenience getter for easy access to form fields
  get f() { return this.fg.controls; }


  private buildForm() {
   
    this.fg = this.fb.group({
      id: [this.materialvendor?this.materialvendor.id:null],
      material: [this.materialvendor?this.materialvendor.material.id:this.material],
      vendor:[this.materialvendor? this.materialvendor.vendor.id : null, Validators.required],
      purchase_uom:[this.materialvendor? this.materialvendor.purchase_uom.id : null, Validators.required],
      unit_price:[this.materialvendor?this.materialvendor.unit_price:'',Validators.required],
      other_charges:[this.materialvendor?this.materialvendor.other_charges:'',Validators.required],
      currency:[this.materialvendor ? this.materialvendor.currency.id : null, Validators.required],
      remarks:[this.materialvendor?this.materialvendor.remarks:'',Validators.required],
      mat_supplier_name: [this.materialvendor?this.materialvendor.mat_supplier_name:'',Validators.required],
      min_order_qty :[this.materialvendor?this.materialvendor.min_order_qty:0],
      lead_time :[this.materialvendor?this.materialvendor.lead_time:'',],
      speed_lead_time :[this.materialvendor?this.materialvendor.speed_lead_time:'',],
      sample_time :[this.materialvendor?this.materialvendor.sample_time:'',],
      lead_time_remarks :[this.materialvendor?this.materialvendor.lead_time_remarks:'',],
      width :[this.materialvendor?this.materialvendor.width:'',],
      width_uom :[this.materialvendor?this.materialvendor.width_uom.id :null,Validators.required],
      status:[this.materialvendor?this.materialvendor.status:''],

    });
  }

  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch(addMaterialvendor({data: this.fg.value}));
  
 
  
  }
}
