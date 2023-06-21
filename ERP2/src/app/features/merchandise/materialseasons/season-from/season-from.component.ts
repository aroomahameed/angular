import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Materialseason,addMaterialseason } from '../../../store/merchandise/materialseason';
import { Season,loadSeasons,selectAllSeasons } from '../../../store/article/season';
import { Currency,loadCurrencies,selectAllCurrencies } from '../../../store/settings/currency';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'smart-season-from',
  templateUrl: './season-from.component.html',
  styleUrls: ['./season-from.component.css']
})
export class SeasonFromComponent implements OnInit {

  seasons: Observable<Season[]>;
  currencys: Observable<Currency[]>;
  materialseason: Materialseason;
  fg: FormGroup;
  submitted = false;
  title = 'Add';
  material:any;
constructor(private fb: FormBuilder, private store: Store<any>) {
   }

  ngOnInit() {
    this.buildForm();
    this.store.dispatch(loadSeasons());
    this.seasons = this.store.select(selectAllSeasons);
    this.store.dispatch(loadCurrencies());
    this.currencys = this.store.select(selectAllCurrencies);

  }

  // convenience getter for easy access to form fields
  get f() { return this.fg.controls; }


  private buildForm() {
   
    this.fg = this.fb.group({
      id: [this.materialseason?this.materialseason.id:null],
      material: [this.materialseason?this.materialseason.material.id:this.material],
      season:[this.materialseason? this.materialseason.season.id : null, Validators.required],
      season_price:[this.materialseason?this.materialseason.season_price:'',Validators.required],
      currency:[this.materialseason ? this.materialseason.currency.id : null, Validators.required],
      status:[this.materialseason?this.materialseason.status:''],

    });
  }

  onSubmit(event) {
  
    Object.keys(this.fg.controls).forEach(field => {
      const control = this.fg.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.fg.invalid) return;

    this.store.dispatch(addMaterialseason({data: this.fg.value}));
  
 
  
  }
}
