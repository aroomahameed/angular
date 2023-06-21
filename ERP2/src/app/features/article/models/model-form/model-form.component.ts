import { Component, OnInit } from '@angular/core';
import { addModel, Model} from '../../../store/article/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from '../../../store/customer/client/client';
import { Season } from '../../../store/article/season/season';
import { Range } from '../../../store/article/range/range';
import { Articlecatagory } from '../../../store/article/articlecatagory/articlecatagory';
import { Factorycode } from '../../../store/settings/factorycode/factorycode';

import { Store } from '@ngrx/store';
import { loadClients, selectAllClients } from '../../../store/customer/client';
import { loadSeasons, selectAllSeasons } from '../../../store/article/season';
import { loadRanges, selectAllRanges } from '../../../store/article/range';
import { loadArticlecatagorys, selectAllArticlecatagorys } from '../../../store/article/articlecatagory';
import { loadFactorycodes, selectAllFactorycodes } from '../../../store/settings/factorycode';


@Component({
  selector: 'smart-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  title="Add";
  fg: FormGroup;
  submitted = false;
  models:Model;
  factorycode:Observable<Factorycode[]>;
  category:Observable<Articlecatagory[]>;
  range:Observable<Range[]>;
  clients: Observable<Client[]>
  season: Observable<Season[]>


  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder,private store: Store<any>,) { }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadClients())
    this.clients = this.store.select(selectAllClients)
    this.store.dispatch(loadSeasons())
    this.season = this.store.select(selectAllSeasons)
    this.store.dispatch(loadFactorycodes())
    this.factorycode = this.store.select(selectAllFactorycodes)
    this.store.dispatch(loadRanges())
    this.range = this.store.select(selectAllRanges)
    this.store.dispatch(loadArticlecatagorys())
    this.category = this.store.select(selectAllArticlecatagorys)
   
  }
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.models?this.models.id:null],
      client: [ this.models?this.models.client.id:null,Validators.required],
      code: [this.models?this.models.code:'' ,Validators.required],
      category: [this.models?this.models.category:null ,Validators.required],
      range:[this.models?this.models.range:null ,Validators.required],
      season: [this.models?this.models.season:null,Validators.required],
      name: [this.models?this.models.name:'',Validators.required],
      factory: [this.models?this.models.factory:null],
      working_no: [this.models?this.models.working_no:''],
      event_desc: [this.models?this.models.event_desc:''],
      ad_path: [this.models?this.models.ad_path:''],
      description: [this.models?this.models.description:''],
      edit_status: [this.models?this.models.edit_status:''],
      status: [this.models?this.models.status:'']
     
    });
  }

  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch( addModel({data: this.fg.value}));
  
 
  
  }

}
