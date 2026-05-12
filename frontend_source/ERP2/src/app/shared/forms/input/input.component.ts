import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControlDirective, FormControl, ControlContainer } from '@angular/forms';

@Component({
  selector: 'smart-input',
  templateUrl: './input.component.html',
  styles: [],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputComponent,
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;
  @Input()
  formControl: FormControl;
  @Input()
  label = 'Label'
  @Input()
  type = 'text'
  @Input()
  formControlName: string;
  @Input()
  id = '';
  @Input()
  error = '';
  @Input()
  valye='';

  

  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  constructor(private controlContainer: ControlContainer) {

  }
  ngOnInit(): void {
    if (this.id === '') {
      this.id = this.label.replace(' ', '-').toLowerCase();
    }

    if(this.error === ''){
      this.error = `${this.label} is required`;
    }
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


}
