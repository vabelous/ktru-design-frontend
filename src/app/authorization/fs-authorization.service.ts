import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

import { AuthorizationFields } from '@ktru-models/authorization.models';
import { InputMask } from '@ktru-models/mask.models';

import { emailValidator } from '@ktru-validators/email.validator';
import { nameValidator } from '@ktru-validators/name.validator';
import { FormControlProperties, DisabledPropertyTypes } from '@ktru-models/fc.models';

import { EMAIL_MASK } from '@ktru-masks/email.mask';

@Injectable()
export class FsAuthorizationService {

  constructor() {}

  public getFormControlProperty(formControlProperties: FormControlProperties, field: AuthorizationFields): any {
    switch (formControlProperties) {
      case FormControlProperties.disabled:
        return this.getDisabledProperty(field);
      case FormControlProperties.validators:
        return this.getValidatorsProperty(field);
      case FormControlProperties.mask:
        return this.getMaskProperty(field);
      case FormControlProperties.defaultValue:
        return this.getDefaultValueProperty(field);
      case FormControlProperties.placeholder:
        return this.getPlaceholderProperty(field);
      default:
        throw new Error(('Unknown kin of form control property!'));
      }
  }


  private getDisabledProperty(field: AuthorizationFields): string {
    switch (field) {
      case AuthorizationFields.Email:
        return DisabledPropertyTypes.enable as string;
      case AuthorizationFields.FirstName:
        return DisabledPropertyTypes.enable as string;
      case AuthorizationFields.LastName:
        return DisabledPropertyTypes.enable as string;
      case AuthorizationFields.Password:
        return DisabledPropertyTypes.enable as string;
      case AuthorizationFields.TermsOfUse:
        return DisabledPropertyTypes.enable as string;
      case AuthorizationFields.Submit:
        return DisabledPropertyTypes.enable as string;
      default:
        return DisabledPropertyTypes.enable as string;
    }
  }

  private getValidatorsProperty(field: AuthorizationFields): Array<ValidatorFn> {
    switch (field) {
      case AuthorizationFields.Email:
        return [emailValidator];
      case AuthorizationFields.FirstName:
        return [nameValidator];
      case AuthorizationFields.LastName:
        return [nameValidator];
      case AuthorizationFields.Password:
        return null;
      case AuthorizationFields.TermsOfUse:
        return null;
      case AuthorizationFields.Submit:
        return null;
      default:
        return null;
    }
  }

  private getMaskProperty(field: AuthorizationFields): InputMask {
    switch (field) {
      case AuthorizationFields.Email:
        return EMAIL_MASK;
      case AuthorizationFields.FirstName:
        return null;
      case AuthorizationFields.LastName:
        return null;
      case AuthorizationFields.Password:
        return null;
      case AuthorizationFields.TermsOfUse:
        return null;
      case AuthorizationFields.Submit:
        return null;
      default:
        return null;
    }
  }

  private getDefaultValueProperty(field: AuthorizationFields): any {
    switch (field) {
      case AuthorizationFields.Email:
        return null;
      case AuthorizationFields.FirstName:
        return null;
      case AuthorizationFields.LastName:
        return null;
      case AuthorizationFields.Password:
        return null;
      case AuthorizationFields.TermsOfUse:
        return null;
      case AuthorizationFields.Submit:
        return null;
      default:
        return null;
    }
  }

  private getPlaceholderProperty(field: AuthorizationFields): any {
    switch (field) {
      case AuthorizationFields.Email:
        return 'Адрес электронной почты';
      case AuthorizationFields.FirstName:
        return 'Имя';
      case AuthorizationFields.LastName:
        return 'Фамилия';
      case AuthorizationFields.Password:
        return 'Пароль';
      case AuthorizationFields.TermsOfUse:
        return null;
      case AuthorizationFields.Submit:
        return null;
      default:
        return null;
    }
  }
}
