import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControlDirective, FormControl, ControlContainer } from '@angular/forms';

@Component({
  selector: 'smart-select',
  templateUrl: './select.component.html',
  styles: [],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectComponent,
    multi: true
  }]
})
export class SelectComponent implements ControlValueAccessor, OnInit  {

  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective;
  @Input()
  formControl: FormControl;
  @Input()
  label = 'Label'
  @Input()
  items: Observable<any[]>;
  @Input()
  formControlName: string;
  @Input()
  id = ''
  @Input()
  isOptional = true
  @Input()
  error = ''
  @Output()
  changeEvt = new EventEmitter()
  @Input()
  name = 'name'

  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  constructor(private controlContainer: ControlContainer) {
    
  }
  ngOnInit(): void {
    if(this.id === ''){
      this.id = this.label.replace(' ', '-').toLowerCase();
    }
    if(this.error === ''){
      this.error = `${this.label} is required`;
    }
  }
  onChange(event){
    this.changeEvt.emit(event.target.value)
  }
  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }



  getName(item: any) {
    if (typeof this.name === typeof []) {
        switch (this.name.length) {
            case 1:
                return item[this.name[0]];
            case 2:
                return item[this.name[0]][this.name[1]];
            case 3:
                return item[this.name[0]][this.name[1]][this.name[2]];
            case 4:
                return item[this.name[0]][this.name[1]][this.name[2]][this.name[3]];
            case 5:
                return item[this.name[0]][this.name[1]][this.name[2]][this.name[3]][this.name[4]];
            case 6:
                return item[this.name[0]][this.name[1]][this.name[2]][this.name[3]][this.name[4]][this.name[5]];
            case 7:
                return item[this.name[0]][this.name[1]][this.name[2]][this.name[3]][this.name[4]][this.name[5]][this.name[6]];
            default:
                return item[this.name[0]];
        }
    }

    return item[this.name];


}


}
