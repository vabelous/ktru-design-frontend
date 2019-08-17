
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header';
import { SidenavComponent } from './sidenav';

import { LayoutsRoutingModule } from './';
import { LayoutsMaterialModule } from './layouts-material.module';
import { I18nModule } from '@ktru-modules/i18n.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    FlexLayoutModule,
    LayoutsRoutingModule,
    LayoutsMaterialModule,
    I18nModule,
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
  ]

})
export class LayoutsModule { }
