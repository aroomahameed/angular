import {  Balltest, addBalltest } from './../../store/fit/balltest';
import { Component, OnInit,Input } from '@angular/core';
import { Test,loadTests,selectAllTests } from '../../store/fit/test';
import { Model,loadModels,selectAllModels } from '../../store/article/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'smart-balltests',
  templateUrl: './balltests.component.html',
  styles: []
})
export class BalltestsComponent implements OnInit {

 
  test: Observable<Test[]>;
  models: Observable<Model[]>;
  balltest: Balltest;
  fg: FormGroup;
  submitted = false;
  title = 'Add';
  viewStatus: false;
  projectId
  test_status = of([{ id: 'P', name: 'Pass' }, { id: 'F', name: 'Fail' }, { id: 'W', name: 'Pending' }])

constructor(private fb: FormBuilder, private store: Store<any>) {
   }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadTests());
    this.test = this.store.select(selectAllTests);
    this.store.dispatch(loadModels());
    this.models = this.store.select(selectAllModels);


  }

  // convenience getter for easy access to form fields
  get f() { return this.fg.controls; }


  private buildForm() {
   
    this.fg = this.fb.group({
      id: [this.balltest?this.balltest.id:null],
      project:[this.balltest? this.balltest.project : this.projectId, Validators.required],
      version:[this.balltest?this.balltest.version:'',Validators.required],
      model_name:[this.balltest?this.balltest.model_name:null,Validators.required],
      test_date:[this.balltest?this.balltest.test_date:'',Validators.required],
      lab_no:[this.balltest?this.balltest.lab_no:'',Validators.required],
      tds_link:[this.balltest?this.balltest.tds_link:'',Validators.required],
      remarks:[this.balltest?this.balltest.remarks:'',Validators.required],
      test:[this.balltest?this.balltest.test:null,Validators.required],
      test_status:[this.balltest?this.balltest.test_status:null,Validators.required],
      tester_name:[this.balltest?this.balltest.tester_name:'',Validators.required],
      tester_remarks:[this.balltest?this.balltest.tester_remarks:'',Validators.required],
      test_link:[this.balltest?this.balltest.test_link:'',Validators.required],
      status:[this.balltest?this.balltest.status:''],

    });
  }

  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch(addBalltest({data: this.fg.value}));
  
 
  
  }

}
