import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'smart-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  formGroup: FormGroup;
  @Output()
  submitEvt = new EventEmitter()
  @Output()
  clearEvt = new EventEmitter()
  
  @Input()
  data: RowData[] = []

  lastValues = {}

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.build();
  }

  private build() {
    let form = {}
    this.data.forEach(data => {
      const row = data.row
      row.forEach(col => {
        let value = col.value
        if (value && typeof value === 'object'){
          value = value.id
        }
        form[col.name] = [{value: value ? value : null, disabled: col.disable ? col.disable: false}, col.validator ? col.validator : null]
      })
    })
    
    this.formGroup = this.formBuilder.group(form)
  }

  onSubmit() {
    Object.keys(this.formGroup.controls).forEach(field => {
      const control = this.formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    });
    if (this.formGroup.invalid) return;
    this.submitEvt.emit(this.formGroup.getRawValue())

  }

  columns(row) {
    const num = Math.round(12 / row.length)
    return `col-md-${num}`
  }

  onClear(){
    this.build()
    this.clearEvt.emit('');
  }

}

export interface RowData {
  row: ColumnData[]
}

export interface ColumnData {
  label: string;
  name: string;
  type?: string;
  value?: any;
  disable?: boolean;
  hidden?: boolean;
  items?: Observable<any[]>;
  checkedLabel?: string;
  unCheckedLabel?: string;
  validator?: Validators
}
