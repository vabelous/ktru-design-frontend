import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthorizationComponent } from './authorization.component';
import { AuthorizationMaterialModule } from './authorization-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FcAuthorizationService } from './fc-authorization.service';
import { FsAuthorizationService } from './fs-authorization.service';

@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    AuthorizationMaterialModule,
    ReactiveFormsModule,
    BrowserModule,

  ],
  exports: [
    AuthorizationComponent
  ],
  providers: [
    FcAuthorizationService,
    FsAuthorizationService,

  ],

})
export class AuthorizationModule { }
