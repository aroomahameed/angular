import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{ Article, addArticle }from '../../../store/article/article';
import {Observable} from 'rxjs';
import { Client } from '../../../store/customer/client/client';
import { Model } from '../../../store/article/model/model';
import { Season } from '../../../store/article/season/season';
import { loadClients, selectAllClients } from '../../../store/customer/client';
import { loadModels, selectAllModels, selectByClientID } from '../../../store/article/model';
import { loadSeasons, selectAllSeasons } from '../../../store/article/season';
import { Store } from '@ngrx/store';


@Component({
  selector: 'smart-article-from',
  templateUrl: './article-from.component.html',
  styleUrls: ['./article-from.component.css']
})
export class ArticleFromComponent implements OnInit {
title="Add";
fg: FormGroup;
submitted = false;
article: Article;
models: Model;
public error: any; 
clients: Observable<Client[]>
model: Observable<Model[]>
season: Observable<Season[]>
imageurl = "assets/img/demo/upload.png";
filetoupload: File = null;

get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder,private store: Store<any>,) { }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadClients())
    this.clients = this.store.select(selectAllClients)

    this.store.dispatch(loadSeasons())
    this.season = this.store.select(selectAllSeasons)
    if(this.article){
      this.model = this.store.select(selectByClientID, this.article.client.id)
    }
    if(this.models){
      this.model = this.store.select(selectByClientID, this.models.client.id)
    }


    
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
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.article?this.article.id:null],
      client: [this.models ? this.models.client.id : this.article?this.article.client.id:null,Validators.required],
      model: [this.models ? this.models.id : this.article?this.article.model.id:null ,Validators.required],
      image:[this.article?this.article.image:''],
      name: [this.article?this.article.name:'',Validators.required],
      art_number: [this.article?this.article.art_number:'',Validators.required],
      color: [this.article?this.article.color:'', Validators.required],
      first_season: [this.article?this.article.first_season:null],
      description: [this.article?this.article.description:''],
      ready_date: [this.article?this.article.ready_date:''],
      mer_date: [this.article?this.article.mer_date:''],
      ready_closing_date: [this.article?this.article.ready_closing_date:''],
      ready_status: [this.article?this.article.ready_status:''],
      mer_status: [this.article?this.article.mer_status:''],
      status: [this.article?this.article.status:'']
     
    });
  }
  onChange(event){
    this.model = this.store.select(selectByClientID, event)
  }
  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    let art = {...this.fg.value};
    art.image = <File>event.target.Image.files[0];
    if (art.image == undefined && (this.fg.value['id'] === 0 || this.fg.value['id'] === null)){
    // this.toaster.error('Please select a valid image file');
    }else{
    let formData = new FormData();
    for(const key of Object.keys(art)){
      if(art[key])
      formData.append(key, art[key]);
    }

    formData.append('update', 'true');
    this.store.dispatch(addArticle({data: formData}));
 
  }
  }
}
