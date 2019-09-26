import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export const notZeroValidator: ValidatorFn = (formControl: AbstractControl): ValidationErrors | null => {
    const notZeroPattern = /^0+$/;
    const errors: { [key: string]: string } = {};
    if (formControl.value) {
      const value = formControl.value.replace(/\D/g, '');
      if (value) {
        const isOnlyZeroes = notZeroPattern.test(value);
        if (isOnlyZeroes) {
          errors.invalidEmail = 'Недопустимое значение';
        }
      }
    }
    return Object.keys(errors).length > 0 ? errors : null;
  };
