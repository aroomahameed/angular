import { selectCurrentPouploading, PouploadingService, addPouploading, Pouploading } from './../../store/productionorder/pouploading';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client, loadClients, selectAllClients } from '../../store/customer/client';
import { Pohead, loadPoheads, } from '../../store/productionorder/pohead';
import { Store } from '@ngrx/store';
import * as XLSX from 'xlsx'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { } from '@angular/router';

@Component({
  selector: 'smart-pouploadings',
  templateUrl: './pouploadings.component.html',
  styles: []
})
export class PouploadingsComponent implements OnInit {
  title: 'Add'
  client: Observable<Client[]>
  pouploading: Pouploading
  file: File;
  arrayBuffer: any;
  filelist: any;
  fg: FormGroup;
  filevalue: any;
  constructor(private fb: FormBuilder, private store: Store<any>, private pos: Router, private service: PouploadingService) { }
  ngOnInit() {
    this.buildForm()
    this.store.dispatch(loadClients())
    this.client = this.store.select(selectAllClients)
  }
  addfile(event) {
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      var result = XLSX.utils.sheet_to_json(worksheet, { raw: false })
      for (let j = 0; j < result.length; j++) {
        const obj = result[j]
      }
    }
  }
  private buildForm() {
    this.fg = this.fb.group({
      id: [this.pouploading ? this.pouploading.id : null],
      file: [this.pouploading ? this.pouploading.file : null, Validators.required],
    });
  }
  onFileChange(e) {
    if (e.target.files.length > 0) {
      this.filevalue = e.target.files[0]
    }
  }
  onSubmit(event) {
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;
    const formdata = new FormData()
    formdata.append("file", <File>this.filevalue)
    // this.store.dispatch(addPouploading({data: formdata}));
    // this.router.navigate(['productionorder/po']);
    this.service.save(formdata).subscribe(data => {
      var pom = document.createElement('a');
      var csvContent = data; //here we load our csv data 
      var blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      var url = URL.createObjectURL(blob);
      pom.href = url;
      pom.setAttribute('download', 'error-log.csv');
      pom.click();
    })
  }
}
