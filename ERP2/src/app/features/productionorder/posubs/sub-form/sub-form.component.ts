import { selectCurrentPosub, selectAllPosubs, Posub, addPosub } from '../../../store/productionorder/posub';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pohead, selectCurrentPohead, selectAllPoheads, selectByPOID, loadPoheads } from '../../../store/productionorder/pohead';
import { Store } from '@ngrx/store';
import { Model, loadModels, selectAllModels } from '../../../store/article/model';
import { Article, loadArticles, selectAllArticles, selectByModelsID } from '../../../store/article/article';
import { Router } from '@angular/router';
@Component({
  selector: 'smart-sub-form',
  templateUrl: './sub-form.component.html',
  styleUrls: ['./sub-form.component.css']
})
export class SubFormComponent implements OnInit {
  fg: FormGroup;
  title = "Add";
  posub: Posub;
  submitted = false;
  pohead: Pohead;
  poheads: Observable<Pohead[]>
  models: Observable<Model[]>
  articles: Observable<Article[]>
  constructor(private fb: FormBuilder, private store: Store<any>, private _router: Router) { }
  get f() { return this.fg.controls; }
  ngOnInit() {

    this.buildForm();
    this.store.dispatch(loadModels())
    this.models = this.store.select(selectAllModels)
    this.store.dispatch(loadArticles())
    this.store.dispatch(loadPoheads())
    this.poheads = this.store.select(selectAllPoheads)

    if (this.pohead) {

      this.poheads = this.store.select(selectByPOID, this.pohead.id)
    }
    if (this.posub) {

      this.articles = this.store.select(selectByModelsID, this.posub.model.id)
    }

  }
  onChangeModel(event) {
    this.articles = this.store.select(selectByModelsID, event)
  }
  private buildForm() {
    this.fg = this.fb.group({
      id: [this.posub ? this.posub.id : null],
      production_order: [this.pohead ? this.pohead.id : this.posub ? this.posub.production_order : null, Validators.required],
      model: [this.posub ? this.posub.model.id : null, Validators.required],
      article: [this.posub ? this.posub.article.id : null, Validators.required],
      status: [this.posub ? this.posub.status : true]
    });
  }

  onSubmit(event) {
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;
    this.store.dispatch(addPosub({ data: this.fg.value }));

  }

}
