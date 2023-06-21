import { Component, OnInit } from '@angular/core';
import { addProductionline, Productionline} from '../../../store/article/productionline';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from '../../../store/customer/client/client';
import { Model } from '../../../store/article/model/model';
import { Article } from '../../../store/article/article/article';
import { Articlesize } from '../../../store/article/articlesize/articlesize';
import { Store } from '@ngrx/store';
import { loadClients, selectAllClients } from '../../../store/customer/client';
import { selectByClientID } from '../../../store/article/model';
import { selectByModelsID } from '../../../store/article/article';
import { selectByArticleID } from '../../../store/article/articlesize';
@Component({
  selector: 'smart-prdlines-form',
  templateUrl: './prdlines-form.component.html',
  styleUrls: ['./prdlines-form.component.css']
})
export class PrdlinesFormComponent implements OnInit {
  title="Add";
  fg: FormGroup;
  submitted = false;
  productionline:Productionline;
  articlesize:Articlesize
  sizes:Observable<Articlesize[]>;
  clients: Observable<Client[]>
  model: Observable<Model[]>
  article: Observable<Article[]>

  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder,private store: Store<any>,) { }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadClients())
    this.clients = this.store.select(selectAllClients)

   
    if(this.productionline){
      this.model = this.store.select(selectByClientID, this.productionline.client.id)
      this.article = this.store.select(selectByModelsID, this.productionline.model.id)
      this.sizes = this.store.select(selectByArticleID, this.productionline.article.id)
    }
    if(this.articlesize){
      this.model = this.store.select(selectByClientID, this.articlesize.client.id)
      this.article = this.store.select(selectByModelsID, this.articlesize.model.id)
      this.sizes = this.store.select(selectByArticleID, this.articlesize.article.id)
    }
  }
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.productionline?this.productionline.id:null],
      client: [ this.articlesize ? this.articlesize.client.id : this.productionline?this.productionline.client.id:null,Validators.required],
      model: [this.articlesize ? this.articlesize.model.id :this.productionline?this.productionline.model.id:null ,Validators.required],
      article:[ this.articlesize ? this.articlesize.article.id :this.productionline?this.productionline.article.id:null ,Validators.required],
      size: [this.articlesize ? this.articlesize.id : this.productionline?this.productionline.size.id:null,Validators.required],
      name: [this.productionline?this.productionline.name:'',Validators.required],
      status: [this.productionline?this.productionline.status:'']
     
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
  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch( addProductionline({data: this.fg.value}));
  
 
  
  }

}
