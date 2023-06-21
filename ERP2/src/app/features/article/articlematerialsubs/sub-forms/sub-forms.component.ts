import { Component, OnInit } from '@angular/core';
import { Articlematerial,selectAllArticlematerials,selectByArticleMaterialID} from '../../../store/article/articlematerial';
import { addArticlematerialsub, Articlematerialsub} from '../../../store/article/articlematerialsub';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from '../../../store/customer/client/client';
import { Model } from '../../../store/article/model/model';
import { Article } from '../../../store/article/article/article';
import { Articlesize } from '../../../store/article/articlesize/articlesize';
import { Productionline } from '../../../store/article/productionline/productionline';
import { Uom} from '../../../store/settings/uom/uom';
import { Material} from '../../../store/merchandise/material/material';
import { Store } from '@ngrx/store';
import { loadClients, selectAllClients } from '../../../store/customer/client';
import { selectByClientID } from '../../../store/article/model';
import { selectByModelsID } from '../../../store/article/article';
import { selectByArticleID } from '../../../store/article/articlesize';
import { selectByArticlesizeID } from '../../../store/article/productionline';
import { loadUoms,selectAllUoms } from '../../../store/settings/uom';

@Component({
  selector: 'smart-sub-forms',
  templateUrl: './sub-forms.component.html',
  styleUrls: ['./sub-forms.component.css']
})
export class SubFormsComponent implements OnInit {
  title="Add";
  fg: FormGroup;
  submitted = false;
  articlematerialsub:Articlematerialsub;
  material:Articlematerial;
  productionlines:Observable<Productionline[]>;
  materials:Observable<Articlematerial[]>;
  sizes:Observable<Articlesize[]>;
  clients: Observable<Client[]>
  model: Observable<Model[]>
  article: Observable<Article[]>
  uom: Observable<Uom[]>
  allmaterials: Observable<Material[]>
  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder,private store: Store<any>,) { }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadClients())
    this.clients = this.store.select(selectAllClients)
    // this.store.dispatch(loadUoms())
    // this.uom = this.store.select(selectAllUoms)
    // // this.store.dispatch(loadMaterials())
    // // this.allmaterials = this.store.select(selectAllMaterials)


   
    if(this.articlematerialsub){
      this.model = this.store.select(selectByClientID, this.articlematerialsub.client)
      this.article = this.store.select(selectByModelsID, this.articlematerialsub.model)
      this.sizes = this.store.select(selectByArticleID, this.articlematerialsub.article)
      this.productionlines = this.store.select(selectByArticlesizeID, this.articlematerialsub.size)
      this.materials = this.store.select(selectByArticleMaterialID, this.articlematerialsub.art_material)
    }
    if(this.material){
      this.model = this.store.select(selectByClientID, this.material.client)
      this.article = this.store.select(selectByModelsID, this.material.model)
      this.sizes = this.store.select(selectByArticleID, this.material.article)
      this.productionlines = this.store.select(selectByArticlesizeID, this.material.size)
    }
  }
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.articlematerialsub?this.articlematerialsub.id:null],
      client: [this.material ? this.material.client:  this.articlematerialsub?this.articlematerialsub.client:null,Validators.required],
      model: [this.material ? this.material.model: this.articlematerialsub?this.articlematerialsub.model:null ,Validators.required],
      article:[this.material ? this.material.article: this.articlematerialsub?this.articlematerialsub.article:null ,Validators.required],
      size: [this.material ? this.material.size: this.articlematerialsub?this.articlematerialsub.size:null,Validators.required],
      production_line:[this.material ? this.material.production_line: this.articlematerialsub?this.articlematerialsub.production_line:null,Validators.required],
      art_material:[this.material ? this.material.id: this.articlematerialsub?this.articlematerialsub.art_material:null,Validators.required],
      serial_no:[this.articlematerialsub?this.articlematerialsub.serial_no:''],
      width:[ this.articlematerialsub?this.articlematerialsub.width:0 ],
      length:[ this.articlematerialsub?this.articlematerialsub.length:0 ],
      height: [ this.articlematerialsub?this.articlematerialsub.height:0],
      mat_use_name:[this.articlematerialsub?this.articlematerialsub.mat_use_name:''],
      no_of_pcs:[this.articlematerialsub?this.articlematerialsub.no_of_pcs:''],
      total_material:[this.articlematerialsub?this.articlematerialsub.total_material:0],
      status: [this.articlematerialsub?this.articlematerialsub.status:true],
  
     
    });
  }
  onChangeClient(event){
    this.model = this.store.select(selectByClientID, event)
  }
  onChangeModel(event){
    this.article = this.store.select(selectByModelsID, event)
  }
  onChangeArticle(event){
    this.sizes = this.store.select(selectByArticleID, event)
  }
  onChangeArticlesize(event){
    this.productionlines= this.store.select(selectByArticlesizeID, event)
  }
  async onChangeArticleMaterial(event){
    this.materials= this.store.select(selectAllArticlematerials, event)
       let sub = this.materials.subscribe(data => {
     const mat = data[0];
     this.fg.patchValue({art_material: mat.material})
  
   })

   sub.unsubscribe();
  }

  // async onChangeMaterial(event){
  //  this.allmaterials=this.store.select(selecetmaterialbyid, event)
  //  let sub = this.allmaterials.subscribe(data => {
  //    const mat = data[0];
  //    this.fg.patchValue({width: mat.mat_width})
  //    this.fg.patchValue({base_uom: mat.base_uom.id})
  //    this.fg.patchValue({length: mat.mat_length})
  //    this.fg.patchValue({height: mat.mat_height})
  
  //  })

  //  sub.unsubscribe();
  // }
  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;
  
    this.store.dispatch( addArticlematerialsub({data: this.fg.getRawValue()}));
  
 
  
  }


}
