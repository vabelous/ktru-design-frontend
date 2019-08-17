import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [

  ],
  exports: [
  ]
})

export class SvgIconsModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/svg-icons/angular.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'user',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/svg-icons/user.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'users',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/svg-icons/users.svg')
    );
  }

}
