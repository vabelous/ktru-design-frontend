import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,

  ],
  providers: []
})

export class AuthorizationMaterialModule { }
