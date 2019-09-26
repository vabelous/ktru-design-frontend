import { FcAuthorizationService } from './authorization/fc-authorization.service';
import { UiService } from './common/services/ui.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {

  title = 'КТРУ.Проектирование';

  private leftSideNavStatusSub: Subscription;
  private rightSideNavStatusSub: Subscription;

  @ViewChild('sidenav_left', {static: false}) private sidenavLeft: MatSidenav;
  @ViewChild('sidenav_right', {static: false}) private sidenavRight: MatSidenav;

  constructor(private uiService: UiService, fcAuthorizationService: FcAuthorizationService) {
    fcAuthorizationService.getAuthorizationActionsFields();
  }

  ngAfterViewInit(): void {
    this.leftSideNavStatusSub = this.uiService.getLeftSideNavStatus()
      .subscribe( _ => this.toggleLeftSideNav());
    this.rightSideNavStatusSub = this.uiService.getRightSideNavStatus()
      .subscribe( _ => this.toggleRightSideNav());
  }

  toggleLeftSideNav() {
    this.sidenavLeft.toggle();
  }

  toggleRightSideNav() {
    this.sidenavRight.toggle();
  }
}
