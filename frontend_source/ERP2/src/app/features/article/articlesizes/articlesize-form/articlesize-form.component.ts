import { Component, OnInit } from '@angular/core';
import { addArticlesize, Articlesize} from '../../../store/article/articlesize';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {Client, loadClients, selectAllClients } from '../../../store/customer/client';
import { Model,selectByClientID } from '../../../store/article/model';
import { Article,loadArticles, selectByModelsID } from '../../../store/article/article';
import { Carton,loadCartons, selectAllCartons } from '../../../store/article/carton';
import { Uom,loadUoms, selectAllUoms } from '../../../store/settings/uom';


@Component({
  selector: 'smart-articlesize-form',
  templateUrl: './articlesize-form.component.html',
  styleUrls: ['./articlesize-form.component.css']
})
export class ArticlesizeFormComponent implements OnInit {
  title="Add";
  fg: FormGroup;
  submitted = false;
  articlesize:Articlesize;
  article:Article;
  clients: Observable<Client[]>
  model: Observable<Model[]>
  articles: Observable<Article[]>
  carton: Observable<Carton[]>
  uom: Observable<Uom[]>

  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder,private store: Store<any>,) { }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadClients())
    this.clients = this.store.select(selectAllClients)

   // this.store.dispatch(loadArticles())
    // this.article = this.store.select(selectAllArticles)
    this.store.dispatch(loadCartons())
    this.carton = this.store.select(selectAllCartons)
    this.store.dispatch(loadUoms())
    this.uom = this.store.select(selectAllUoms)
   
    if(this.articlesize){
      this.model = this.store.select(selectByClientID, this.articlesize.client.id)
      this.articles = this.store.select(selectByModelsID, this.articlesize.model.id)
    }

    if(this.article){
      this.model = this.store.select(selectByClientID, this.article.client.id)
      this.articles = this.store.select(selectByModelsID, this.article.model.id)
    }

    
  }
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.articlesize?this.articlesize.id:null],
      client: [ this.article ? this.article.client.id : this.articlesize?this.articlesize.client.id:null,Validators.required],
      model: [this.article ? this.article.model.id :this.articlesize?this.articlesize.model.id:null ,Validators.required],
      article:[this.article ? this.article.id : this.articlesize?this.articlesize.article.id:null ,Validators.required],
      size: [this.articlesize?this.articlesize.size:'',Validators.required],
      customer_size : [this.articlesize?this.articlesize.customer_size:''],
      manufacturing_size: [this.articlesize?this.articlesize.manufacturing_size:''],
      carton: [this.articlesize?this.articlesize.carton:null,Validators.required],
      qty_per_carton: [this.articlesize?this.articlesize.qty_per_carton:0],
      unit_price: [this.articlesize?this.articlesize.unit_price:0],
      sale_price: [this.articlesize?this.articlesize.sale_price:0],
      base_uom: [this.articlesize?this.articlesize.base_uom:''],
      weight_uom: [this.articlesize?this.articlesize.weight_uom:''],
      dimension: [this.articlesize?this.articlesize.dimension:''],
      description: [this.articlesize?this.articlesize.description:''],
      tac_time: [this.articlesize?this.articlesize.tac_time:''],
      reference: [this.articlesize?this.articlesize.reference:''],
      net_weight: [this.articlesize?this.articlesize.net_weight:0],
      net_net_weight: [this.articlesize?this.articlesize.net_net_weight:0],
      barcode: [this.articlesize?this.articlesize.barcode:''],
      ean_barcode: [this.articlesize?this.articlesize.ean_barcode:''],
      upc_barcode: [this.articlesize?this.articlesize.upc_barcode:''],
      any_other_barcode: [this.articlesize?this.articlesize.any_other_barcode:''],
      status: [this.articlesize?this.articlesize.status:'']
     
    });
  }
  onChangeClient(event){
    this.model = this.store.select(selectByClientID, event)
  }
  onChangeModel(event){
    this.articles = this.store.select(selectByModelsID, event)
  }
  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch( addArticlesize({data: this.fg.value}));
  
 
  
  }
}
