import { FormControl } from '@angular/forms';

import { patterns } from './';

export const nameValidator = (control: FormControl): { [s: string]: boolean } => {
  if (!control.value.match(patterns.name)) {
    return {
    	invalidName: true
    };
  }
}

export const ageValidator = (control: FormControl): { [s: string]: boolean } => {
  if (+control.value<1 || control.value>100) {
    return {
    	invalidAge: true
    };
  }
}
