import { Component, OnInit } from '@angular/core';
import { addArticleme, Articleme} from '../../../store/article/articleme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from '../../../store/customer/client/client';
import { Model } from '../../../store/article/model/model';
import { Article } from '../../../store/article/article/article';
import { Articlesize } from '../../../store/article/articlesize/articlesize';
import { Store } from '@ngrx/store';
import { loadClients, selectAllClients } from '../../../store/customer/client';
import { selectByClientID,loadModels } from '../../../store/article/model';
import { selectByModelsID ,loadArticles} from '../../../store/article/article';
import { selectByArticleID } from '../../../store/article/articlesize';

@Component({
  selector: 'smart-me-form',
  templateUrl: './me-form.component.html',
  styleUrls: ['./me-form.component.css']
})
export class MeFormComponent implements OnInit {

  title="Add";
  fg: FormGroup;
  submitted = false;
  articleme:Articleme;
  sizes:Observable<Articlesize[]>;
  clients: Observable<Client[]>
  model: Observable<Model[]>
  article: Observable<Article[]>
  articles:Article;

  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder,private store: Store<any>,) { }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadClients())
    this.clients = this.store.select(selectAllClients)
    this.store.dispatch(loadModels())
    this.store.dispatch(loadArticles())

   
    if(this.articleme){
      this.model = this.store.select(selectByClientID, this.articleme.client.id)
      this.article = this.store.select(selectByModelsID, this.articleme.model.id)
     
    }
    if(this.articles){

      this.model = this.store.select(selectByClientID, this.articles.client.id)
      this.article = this.store.select(selectByModelsID, this.articles.model.id)
    }
  }
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.articleme?this.articleme.id:null],
     
      client: [ this.articles ? this.articles.client.id : this.articleme?this.articleme.client.id:null,Validators.required],
      model: [this.articles ? this.articles.model.id :this.articleme?this.articleme.model.id:null ,Validators.required],
      article:[this.articles ? this.articles.id :this.articleme?this.articleme.article.id:null ,Validators.required],
      gsd_target: [this.articleme?this.articleme.gsd_target:''],
      me_target: [this.articleme?this.articleme.me_target:''],
      packing_target: [this.articleme?this.articleme.packing_target:''],
      sam_forming: [this.articleme?this.articleme.sam_forming:''],
      sam_packing: [this.articleme?this.articleme.sam_packing:''],
      status: [this.articleme?this.articleme.status:'']
     
    });
  }
  onChangeClients(event){
   this.model = this.store.select(selectByClientID, event)
  }
  onChangeModels(event){
    this.article = this.store.select(selectByModelsID, event)
  }
 
  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch( addArticleme({data: this.fg.value}));
  
 
  
  }


}
