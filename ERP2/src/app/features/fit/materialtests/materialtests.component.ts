import { Component, OnInit, Input } from '@angular/core';
import { Materialtest, addMaterialtest } from '../../store/fit/materialtest';
import { Material, loadMaterials, selectAllMaterials } from '../../store/merchandise/material';
import { Test, loadTests, selectAllTests } from '../../store/fit/test';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'smart-materialtests',
  templateUrl: './materialtests.component.html',
  styles: []
})
export class MaterialtestsComponent implements OnInit {
  test: Observable<Test[]>;
  material: Observable<Material[]>;
  materialtest: Materialtest;
  fg: FormGroup;
  submitted = false;
  title = 'Add';
  viewStatus: false;
  projectId
  material_types = of([{ id: 'N', name: 'New' }, { id: 'A', name: 'Already Tested' }])
  test_status = of([{ id: 'P', name: 'Pass' }, { id: 'F', name: 'Fail' }, { id: 'W', name: 'Pending' }])

  constructor(private fb: FormBuilder, private store: Store<any>) {
  }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadTests());
    this.test = this.store.select(selectAllTests);
    this.store.dispatch(loadMaterials());
    this.material = this.store.select(selectAllMaterials);
  }

  // convenience getter for easy access to form fields
  get f() { return this.fg.controls; }


  private buildForm() {

    this.fg = this.fb.group({
      id: [this.materialtest ? this.materialtest.id : null],
      material_name: [this.materialtest ? this.materialtest.material_name.id : null],
      project: [this.materialtest ? this.materialtest.project : this.projectId, Validators.required],
      version: [this.materialtest ? this.materialtest.version : '', Validators.required],
      material_type: [this.materialtest ? this.materialtest.material_type : null, Validators.required],
      test_date: [this.materialtest ? this.materialtest.test_date : '', Validators.required],
      lab_no: [this.materialtest ? this.materialtest.lab_no : '', Validators.required],
      tds_link: [this.materialtest ? this.materialtest.tds_link : '', Validators.required],
      remarks: [this.materialtest ? this.materialtest.remarks : '', Validators.required],
      test: [this.materialtest ? this.materialtest.test.id : null, Validators.required],
      test_status: [this.materialtest ? this.materialtest.test_status : null, Validators.required],
      tester_name: [this.materialtest ? this.materialtest.tester_name : '', Validators.required],
      tester_remarks: [this.materialtest ? this.materialtest.tester_remarks : '', Validators.required],
      test_link: [this.materialtest ? this.materialtest.test_link : '', Validators.required],
      status: [this.materialtest ? this.materialtest.status : ''],

    });
  }

  onSubmit(event) {

    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch(addMaterialtest({ data: this.fg.value }));



  }

}
