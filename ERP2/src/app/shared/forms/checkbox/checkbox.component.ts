import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControlDirective, FormControl, ControlContainer } from '@angular/forms';

@Component({
  selector: 'smart-checkbox',
  templateUrl: './checkbox.component.html',
  styles: [],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CheckboxComponent,
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor, OnInit  {

  @ViewChild(FormControlDirective, {static: true})
  formControlDirective: FormControlDirective;
  @Input()
  formControl: FormControl;
  @Input() label = 'Checkbox Label';
  @Input()
  checkedLabel = 'Active'
  @Input()
  unCheckedLabel = 'In-Active'
  @Input()
  formControlName: string;
  @Input()
  id = '';

  get control() {
    return this.formControl ||     this.controlContainer.control.get(this.formControlName);
  }

  constructor(private controlContainer: ControlContainer) {
    
  }
  ngOnInit(): void {
    if (this.id === '') {
      this.id = this.label.replace(' ', '-').toLowerCase();
    }
    if(this.id === 'status'){
      this.id = 'checkbox-status';
    }

    if(!this.control.value){
      this.control.patchValue(false)
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
