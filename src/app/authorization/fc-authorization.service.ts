import { FsAuthorizationService } from './fs-authorization.service';
import { ExtFormControl, FormControlProperties } from './../common/models/fc.models';
import { MapOfAuthorizationFieldsAndFC, SetOfAuthorizationFields } from './../common/models/authorization.models';
import { Injectable } from '@angular/core';

import { $enum } from 'ts-enum-util';

import { AuthorizationActions } from '@ktru-models/authorization.models';
import { AuthorizationConfig } from '@ktru-models/authorization.models';
import { AuthorizationFields } from '@ktru-models/authorization.models';
import { FormArray, FormControl, FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FcAuthorizationService {

  public actionsControls: BehaviorSubject<FormArray>;

  constructor(
    private fsAuthorizationService: FsAuthorizationService,
    private fb: FormBuilder
    ) {}

  getAuthorizationActionsConfig(): AuthorizationConfig {
    const authorizationConfig: AuthorizationConfig = new Map();
    $enum(AuthorizationActions).forEach((authorizationActions) => {
      let properties: Set<AuthorizationFields>;
      properties = $enum.visitValue(authorizationActions.toString()).with({
        [AuthorizationActions.Login]: () => {
          return new Set([
            AuthorizationFields.Email,
            AuthorizationFields.Password,
            AuthorizationFields.Submit
          ]);
        },
        [AuthorizationActions.Register]: () => {
          return new Set([
            AuthorizationFields.Email,
            AuthorizationFields.FirstName,
            AuthorizationFields.LastName,
            AuthorizationFields.Password,
            AuthorizationFields.TermsOfUse,
            AuthorizationFields.Submit
          ]);
        },
        [AuthorizationActions.ForgotPassword]: () => {
          return new Set([
            AuthorizationFields.Email,
            AuthorizationFields.Submit
          ]);
        },
        [AuthorizationActions.ResetPassword]: () => {
          return new Set([
            AuthorizationFields.Email,
            AuthorizationFields.Submit
          ]);
        },
        [AuthorizationActions.LockScreen]: () => {
          return new Set([
            AuthorizationFields.Email,
            AuthorizationFields.Password,
            AuthorizationFields.Submit
          ]);
        },
        [AuthorizationActions.MailConfirmation]: () => {
          return new Set([]);
        }
      });
      authorizationConfig.set(authorizationActions.toString(), properties);
    });
    return authorizationConfig;
  }

  getActionControls(): FormArray {
    const mapOfAuthorizationFieldsAndFC: MapOfAuthorizationFieldsAndFC = this.getAuthorizationActionsFields();
    const actionControls: FormArray = this.fb.array([]);
    mapOfAuthorizationFieldsAndFC.forEach( element => {
      actionControls.push(element);
    });
    return actionControls;
  }

  getAuthorizationActionsFields(): MapOfAuthorizationFieldsAndFC {
      const result: MapOfAuthorizationFieldsAndFC = new Map();
      const authorizationConfig: AuthorizationConfig = this.getAuthorizationActionsConfig();
      const fields: SetOfAuthorizationFields  = authorizationConfig.get('Вход в учетную запись');
      fields.forEach(field => result.set(field, this.getAuthorizationActionsField(field)));
      return result;
  }

  getAuthorizationActionsField(field: AuthorizationFields): ExtFormControl {
      const fc = new ExtFormControl();
      fc.setValidators(this.fsAuthorizationService.getFormControlProperty(FormControlProperties.validators, field));
      fc.setValue(this.fsAuthorizationService.getFormControlProperty(FormControlProperties.defaultValue, field));
      fc[this.fsAuthorizationService.getFormControlProperty(FormControlProperties.disabled, field)]();
      fc.placeholder = this.fsAuthorizationService.getFormControlProperty(FormControlProperties.placeholder, field);
      fc.mask = this.fsAuthorizationService.getFormControlProperty(FormControlProperties.mask, field);
      fc.updateValueAndValidity();
      return fc;
  }



}
