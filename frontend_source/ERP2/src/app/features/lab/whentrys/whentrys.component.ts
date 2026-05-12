import { selectCurrentWhentry, selectAllWhentrys, Whentry ,addWhentry,loadWhentrys} from './../../store/lab/whentry';
import {  Labball } from './../../store/lab/labball';
import { Component, OnInit } from '@angular/core';
import { RowData } from 'src/app/shared';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { TableData } from 'src/app/shared/custom-tables/table/table.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'smart-whentrys',
  templateUrl: './whentrys.component.html',
  styles: []
})
export class WhentrysComponent implements OnInit {
  fg:FormGroup;
  whentry:Whentry;
  title="Add";
  labballs:Labball;

 cartonstatus = of([{ id: 'IN-Place', name: 'IN-Place' }, { id: 'WH', name: 'WH' }, { id: 'DisposedOff ', name: 'DisposedOff ' }])

  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder,private store: Store<any>,) { }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadWhentrys())
    
  }
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.whentry?this.whentry.id:null],
      lab_balls:[this.whentry?this.whentry.lab_balls:this.labballs.id ,Validators.required],
      serial_no: [this.whentry?this.whentry.serial_no:''],
      test_name: [this.whentry?this.whentry.test_name:''],
      print_panels: [this.whentry?this.whentry.print_panels:''],
      new_ball: [this.whentry?this.whentry.new_ball:''],
      drum_test: [this.whentry?this.whentry.drum_test:''],
      hydrolysis: [this.whentry?this.whentry.hydrolysis:''],
      shooter:[this.whentry?this.whentry.shooter:''],
      carton_number: [this.whentry?this.whentry.carton_number:''],
      carton_status: [this.whentry?this.whentry.carton_status:null],
      status: [this.whentry?this.whentry.status:'']
     
    });
  }
 
 
  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch( addWhentry({data: this.fg.value}));
  
  }

}
