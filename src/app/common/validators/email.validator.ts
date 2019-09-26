import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export const emailValidator: ValidatorFn = (formControl: AbstractControl): ValidationErrors | null => {
    const emailPattern = /.+@.+\..+/i;
    const errors: { [key: string]: string } = {};
    if (formControl.value) {
      const isValid = emailPattern.test(formControl.value.toString().trim().toLowerCase());
      if (!isValid) {
        errors.invalidEmail = 'Недопустимое значение';
      }
    }
    return Object.keys(errors).length > 0 ? errors : null;
};
