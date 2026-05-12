import { Component, OnInit } from '@angular/core';
import { addArticlerate, Articlerate} from '../../../store/article/articlerate';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from '../../../store/customer/client/client';
import { Model } from '../../../store/article/model/model';
import { Article } from '../../../store/article/article/article';
import { Carton } from '../../../store/article/carton/carton';
import { Articlesize } from '../../../store/article/articlesize/articlesize';
import { Store } from '@ngrx/store';
import { loadClients, selectAllClients } from '../../../store/customer/client';
import { loadCartons, selectAllCartons } from '../../../store/article/carton';
import { selectByClientID,loadModels } from '../../../store/article/model';
import { selectByModelsID,loadArticles } from '../../../store/article/article';
import { selectByArticleID,loadArticlesizes } from '../../../store/article/articlesize';
@Component({
  selector: 'smart-rate-form',
  templateUrl: './rate-form.component.html',
  styleUrls: ['./rate-form.component.css']
})
export class RateFormComponent implements OnInit {

  title="Add";
  fg: FormGroup;
  submitted = false;
  articlerate:Articlerate;
  sizes:Observable<Articlesize[]>;
  clients: Observable<Client[]>
  model: Observable<Model[]>
  article: Observable<Article[]>
  carton: Observable<Carton[]>
  articlesize:Articlesize;

  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder,private store: Store<any>,) { }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadClients())
    this.clients = this.store.select(selectAllClients)
    this.store.dispatch(loadModels())
    this.store.dispatch(loadArticles())
    this.store.dispatch(loadArticlesizes())
    this.store.dispatch(loadCartons())
    this.carton = this.store.select(selectAllCartons)

   
    if(this.articlerate){
      this.model = this.store.select(selectByClientID, this.articlerate.client.id)
      this.article = this.store.select(selectByModelsID, this.articlerate.model.id)
      this.sizes = this.store.select(selectByArticleID, this.articlerate.article.id)
     
    }
    if(this.articlesize){
      this.model = this.store.select(selectByClientID, this.articlesize.client.id)
      this.article = this.store.select(selectByModelsID, this.articlesize.model.id)
      this.sizes = this.store.select(selectByArticleID, this.articlesize.article.id)
     
    }
  }
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.articlerate?this.articlerate.id:null],
      client: [ this.articlesize ? this.articlesize.client.id : this.articlerate?this.articlerate.client.id:null,Validators.required],
      model: [this.articlesize ? this.articlesize.model.id : this.articlerate?this.articlerate.model.id:null,Validators.required],
      article:[this.articlesize ? this.articlesize.article.id : this.articlerate?this.articlerate.article.id:null,Validators.required],
      size:[this.articlesize ? this.articlesize.id : this.articlerate?this.articlerate.size.id:null,Validators.required],
      carton: [this.articlerate?this.articlerate.carton:null,Validators.required],
      name: [this.articlerate?this.articlerate.name:'',Validators.required],
      charges: [this.articlerate?this.articlerate.charges:'',Validators.required],
      other_charges: [this.articlerate?this.articlerate.other_charges:'',Validators.required],
      description: [this.articlerate?this.articlerate.description:'',Validators.required],
      status: [this.articlerate?this.articlerate.status:'']
     
    });
  }
  onChangeClients(event){
   
   this.model = this.store.select(selectByClientID, event)
  }
  onChangeModels(event){
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

    this.store.dispatch( addArticlerate({data: this.fg.value}));
  
 
  
  }
}
