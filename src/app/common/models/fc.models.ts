import { ValidatorFn, FormControl, AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormArray } from '@angular/forms';


export class ExtFormControl extends FormControl {
  mask?: InputMask;
  placeholder?: string;
}

export class ExtFormControls extends Array<FormControl> {}

export enum FormControlProperties {
  disabled = 'disabled',
  validators = 'validators',
  mask = 'mask',
  defaultValue = 'defaultValue',
  placeholder = 'placeholder',
}

export enum DisabledPropertyTypes {
  disable = 'disable',
  enable = 'enable',
}


