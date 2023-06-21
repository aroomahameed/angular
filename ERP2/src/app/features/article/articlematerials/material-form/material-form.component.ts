import { Component, OnInit } from '@angular/core';
import { addArticlematerial, Articlematerial } from '../../../store/article/articlematerial';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Client } from '../../../store/customer/client/client';
import { Model } from '../../../store/article/model/model';
import { Article } from '../../../store/article/article/article';
import { Articlesize } from '../../../store/article/articlesize/articlesize';
import { Productionline } from '../../../store/article/productionline/productionline';
import { Uom } from '../../../store/settings/uom/uom';
import { Material } from '../../../store/merchandise/material/material';
import { Store } from '@ngrx/store';
import { loadClients, selectAllClients } from '../../../store/customer/client';
import { selectByClientID } from '../../../store/article/model';
import { selectByModelsID } from '../../../store/article/article';
import { selectByArticleID } from '../../../store/article/articlesize';
import { selectByArticlesizeID } from '../../../store/article/productionline';
import { loadUoms, selectAllUoms } from '../../../store/settings/uom';
import { loadMaterials, selectAllMaterials, selecetmaterialbyid } from '../../../store/merchandise/material';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SubFormsComponent } from '../../articlematerialsubs/sub-forms/sub-forms.component';
import { map } from 'rxjs/operators';
@Component({
  selector: 'smart-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent implements OnInit {
  title = "Add";
  fg: FormGroup;
  options = of([{ id: '1', name: 'Manual' }, { id: '2', name: 'Auto' }])
  allmaterial: Observable<Material[]>
  submitted = false;
  material: Articlematerial;
  productionline: Productionline;
  productionlines: Observable<Productionline[]>;
  sizes: Observable<Articlesize[]>;
  clients: Observable<Client[]>
  model: Observable<Model[]>
  article: Observable<Article[]>
  uom: Observable<Uom[]>
  allmaterials: Observable<Material[]>


  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder, private store: Store<any>, private modalService: BsModalService) { }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadClients())
    this.clients = this.store.select(selectAllClients)
    this.store.dispatch(loadUoms())
    this.uom = this.store.select(selectAllUoms)
    this.store.dispatch(loadMaterials())
    this.allmaterials = this.store.select(selectAllMaterials)
    

    if (this.material) {
      this.model = this.store.select(selectByClientID, this.material.client.id)
      this.article = this.store.select(selectByModelsID, this.material.model.id)
      this.sizes = this.store.select(selectByArticleID, this.material.article.id)
      this.productionlines = this.store.select(selectByArticlesizeID, this.material.size.id)
    }
    if (this.productionline) {
      this.model = this.store.select(selectByClientID, this.productionline.client.id)
      this.article = this.store.select(selectByModelsID, this.productionline.model.id)
      this.sizes = this.store.select(selectByArticleID, this.productionline.article.id)
      this.productionlines = this.store.select(selectByArticlesizeID, this.productionline.size.id)
    }
 
     
  }
  private buildForm() {

    this.fg = this.fb.group({
      id: [this.material ? this.material.id : null],
      client: [this.productionline ? this.productionline.client.id : this.material ? this.material.client.id : null, Validators.required],
      model: [this.productionline ? this.productionline.model.id : this.material ? this.material.model.id : null, Validators.required],
      article: [this.productionline ? this.productionline.article.id : this.material ? this.material.article.id : null, Validators.required],
      size: [this.productionline ? this.productionline.size.id : this.material ? this.material.size.id : null, Validators.required],
      production_line: [this.productionline ? this.productionline.id : this.material ? this.material.production_line.id : null, Validators.required],
      material: [this.material ? this.material.material : null, Validators.required],
      serial_no: [this.material ? this.material.serial_no : ''],
      base_uom: [{ value: this.material ? this.material.base_uom : null, disabled: true }],
      width: [{ value: this.material ? this.material.width : 0, disabled: true }],
      length: [{ value: this.material ? this.material.length : 0, disabled: true }],
      height: [{ value: this.material ? this.material.height : 0, disabled: true }],
      cutting_time: [this.material ? this.material.cutting_time : 0],
      mat_formula: [this.material ? this.material.mat_formula : 0],
      mat_extra: [this.material ? this.material.mat_extra : 0],
     total_formula: [this.material ? this.material.total_formula : 0],
      eou_formula: [this.material ? this.material.eou_formula : 0],
      mat_wastage: [this.material ? this.material.mat_wastage : 0],
      mat_description: [this.material ? this.material.mat_description : ''],
      process_id: [this.material ? this.material.process_id : 0],
      status: [this.material ? this.material.status : ''],
      type: [null],
      

    });
  }
  onChangeClient(event) {
    this.model = this.store.select(selectByClientID, event)
  }
  onChangeModel(event) {
    this.article = this.store.select(selectByModelsID, event)
  }
  onChangeArticle(event) {
    this.sizes = this.store.select(selectByArticleID, event)
  }
  onChangeArticlesize(event) {
    this.productionlines = this.store.select(selectByArticlesizeID, event)
  }
  // onChangeType(event, material) {
  //   if (event == 1) {
  //     this.fg.controls['mat_formula'].enable({ onlySelf: true });
  //     this.fg.controls['cutting_time'].enable({ onlySelf: true });
  //     this.fg.controls['mat_extra'].enable({ onlySelf: true });
  //     this.fg.controls['total_formula'].enable({ onlySelf: true });
  //     this.fg.controls['mat_description'].enable({ onlySelf: true });

  //   }


  //   if (event == 2) {
  //     this.fg.controls['mat_formula'].disable({ onlySelf: true });
  //     this.fg.controls['cutting_time'].disable({ onlySelf: true });
  //     this.fg.controls['mat_extra'].disable({ onlySelf: true });
  //     this.fg.controls['total_formula'].disable({ onlySelf: true });
  //     this.fg.controls['mat_description'].disable({ onlySelf: true });
    
  //     const initialState = {
  //       material,
  //       title: 'ADD',

  //     };
  //     this.modalService.show(SubFormsComponent, { initialState, class: 'modal-lg' });


  //   }

  // }
  async onChangeMaterial(event) {
    this.allmaterial = this.store.select(selecetmaterialbyid, event)
    let sub = this.allmaterial.subscribe(data => {
      const mat = data[0];
      this.fg.patchValue({ width: mat.mat_width })
      this.fg.patchValue({ base_uom: mat.base_uom.id })
      this.fg.patchValue({ length: mat.mat_length })
      this.fg.patchValue({ height: mat.mat_height })

    })

    sub.unsubscribe();
  }
  onSubmit(event) {

    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch(addArticlematerial({ data: this.fg.getRawValue() }));



  }

}
