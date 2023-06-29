import {AbstractControl,ValidatorFn} from '@angular/forms'

export function userNameValidator() : ValidatorFn {

  return (control: AbstractControl) : {[key:string]:boolean} | null=>{

      if(control.value.endsWith(" ") == true){
        return {'UserNameNotAllowed':true}

      }

    else{
      return null;
    }
  };
}
