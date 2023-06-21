import { Component, OnInit } from '@angular/core';
import { selectAllLabballs, Labball,addLabball } from '../../../store/lab/labball';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadArticles, selectAllArticles,Article } from '../../../store/article/article';
@Component({
  selector: 'smart-ball-form',
  templateUrl: './ball-form.component.html',
  styleUrls: ['./ball-form.component.css']
})
export class BallFormComponent implements OnInit {
  fg:FormGroup;
  labballs:Labball;
  title="Add";
  article: Observable<Article[]>
  get f() { return this.fg.controls; }
  constructor(private fb: FormBuilder,private store: Store<any>,) { }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadArticles())
    this.article = this.store.select(selectAllArticles)
  }
  private buildForm() {
   
    this.fg = this.fb.group({
      id:[this.labballs?this.labballs.id:null],
      article_no:[this.labballs?this.labballs.article_no.id:null ,Validators.required],
      date: [this.labballs?this.labballs.date:''],
      prd_month: [this.labballs?this.labballs.prd_month:''],
      qty_received: [this.labballs?this.labballs.qty_received:''],
      purpose: [this.labballs?this.labballs.purpose:''],
      sender_name: [this.labballs?this.labballs.sender_name:''],
      sender_ref: [this.labballs?this.labballs.sender_ref:''],
      receiver_name: [this.labballs?this.labballs.receiver_name:''],
      qty_returned: [this.labballs?this.labballs.qty_returned:''],
      return_date: [this.labballs?this.labballs.return_date:''],
      returned_person_name: [this.labballs?this.labballs.returned_person_name:''],
      status: [this.labballs?this.labballs.status:'']
     
    });
  }
  
  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch( addLabball({data: this.fg.value}));
  
  }

 
}
