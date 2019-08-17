import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header';
import { SidenavComponent } from './sidenav';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: '',
            component: HeaderComponent,
            outlet: 'header',
          },
          {
            path: '',
            component: SidenavComponent,
            outlet: 'sidenav',
          },
        ],
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class LayoutsRoutingModule { }
