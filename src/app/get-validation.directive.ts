import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appGetValidation]',
  providers:[{provide:NG_VALIDATORS,useExisting:GetValidationDirective,multi:true}]
})
export class GetValidationDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any,any>): ValidationErrors | null {
    let val = control.value;
      if(val === "Select a country"){
        return{'validation':true,"requiredVal":'country'};
      }
      else{
        return null;
      }
    }
}
