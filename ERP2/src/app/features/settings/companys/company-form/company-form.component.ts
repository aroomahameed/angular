import { Component, OnInit } from '@angular/core';
import { Company, addCompany } from '../../../store/settings/company';
import { Country, loadCountries,selectAllCountries } from '../../../store/settings/country';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'smart-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  company: Company;
  fg: FormGroup;
  submitted = false;
  title = 'Add';
  public error: any;
  imageurl = "assets/img/demo/upload.png";
  filetoupload: File = null;
  countries:Observable<Country[]>;

  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder, private store: Store<any>) { }

  ngOnInit() {
    this.buildForm();

    this.store.dispatch(loadCountries());
    this.countries = this.store.select(selectAllCountries);

  }

  handlefileinput(file: FileList) {
    this.filetoupload = file.item(0);
    //show image review
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageurl = event.target.result;
    }
    reader.readAsDataURL(this.filetoupload);
  }

  // convenience getter for easy access to form fields

  private buildForm() {
    this.fg = this.fb.group({
      id: [this.company ? this.company.id : null],
      name: [this.company ? this.company.name : '', Validators.required],
      code: [this.company ? this.company.code : '', Validators.required],
      legal_name: [this.company ? this.company.legal_name : '', Validators.required],
      owner_name: [this.company ? this.company.owner_name : '', Validators.required],
      logo: [this.company ? this.company.logo : '', Validators.required],
      reg_date: [this.company ? this.company.reg_date : '', Validators.required],
      address: [this.company ? this.company.address : '', Validators.required],
      country: [this.company ? this.company.country : null, Validators.required],
      email: [this.company ? this.company.email : '', Validators.required && Validators.email],
      phone: [this.company ? this.company.phone : '', ],
      fax: [this.company ? this.company.fax : '', ],
      vat: [this.company ? this.company.vat : '', ],
      gst: [this.company ? this.company.gst : '',],
      ntn: [this.company ? this.company.ntn : '', ],
      website: [this.company ? this.company.website : '', ],
      invoice_email: [this.company ? this.company.invoice_email : '', Validators.email],
      admin_name: [this.company ? this.company.admin_name : '', Validators.required],
      admin_email: [this.company ? this.company.admin_email : '', Validators.required && Validators.email],
      admin_phone: [this.company ? this.company.admin_phone : '', Validators.required],
      status: [this.company ? this.company.status : ''],

    });
  }



  onSubmit(event) {

    // Object.keys(this.fg.controls).forEach(field => {
    //   const control = this.fg.get(field);
    //   control.markAsTouched({ onlySelf: true });
    //   control.markAsDirty({ onlySelf: true });
    // });
    // if (this.fg.invalid) return;

    let mat = { ...this.fg.value };
    mat.logo = <File>event.target.Image.files[0];
    if (mat.logo == undefined && (this.fg.value['id'] === 0 || this.fg.value['id'] === null)) {
      // this.toaster.error('Please select a valid image file');
    } else {
      let formData = new FormData();
      for (const key of Object.keys(mat)) {
        if (mat[key])
          formData.append(key, mat[key]);
      }

      formData.append('update', 'true');
      this.store.dispatch(addCompany({ data: formData }));

    }

  }

}
