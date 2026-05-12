import { Component, OnInit } from '@angular/core';
import { addArticleqca, Articleqca} from '../../../store/article/articleqca';
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
  selector: 'smart-qca-form',
  templateUrl: './qca-form.component.html',
  styleUrls: ['./qca-form.component.css']
})
export class QcaFormComponent implements OnInit {
  title="Add";
  fg: FormGroup;
  submitted = false;
  articleqca:Articleqca;
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

   
    if(this.articleqca){
      this.model = this.store.select(selectByClientID, this.articleqca.client.id)
      this.article = this.store.select(selectByModelsID, this.articleqca.model.id)
      this.sizes = this.store.select(selectByArticleID, this.articleqca.article.id)
     
    }
    if(this.articlesize){
      this.model = this.store.select(selectByClientID, this.articlesize.client.id)
      this.article = this.store.select(selectByModelsID, this.articlesize.model.id)
      this.sizes = this.store.select(selectByArticleID, this.articlesize.article.id)
     
    }
  }
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.articleqca?this.articleqca.id:null],
      client: [ this.articlesize ? this.articlesize.client.id : this.articleqca?this.articleqca.client.id:null,Validators.required],
      model: [ this.articlesize ? this.articlesize.model.id :this.articleqca?this.articleqca.model.id:null ,Validators.required],
      article:[ this.articlesize ? this.articlesize.article.id :this.articleqca?this.articleqca.article.id:null ,Validators.required],
      size:[ this.articlesize ? this.articlesize.id :this.articleqca?this.articleqca.size.id:null ,Validators.required],
      name: [this.articleqca?this.articleqca.name:'',Validators.required],
      start_value: [this.articleqca?this.articleqca.start_value:0,Validators.required],
      end_value: [this.articleqca?this.articleqca.end_value:0,Validators.required],
      description: [this.articleqca?this.articleqca.description:''],
      status: [this.articleqca?this.articleqca.status:'']
     
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

    this.store.dispatch( addArticleqca({data: this.fg.value}));
  
 
  
  }

}
