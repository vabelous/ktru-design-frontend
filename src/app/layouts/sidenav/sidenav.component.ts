import { UiService } from './../../common/services/ui.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {

  constructor(private uiService: UiService) {}

  toggleLeftSidenav(event) {
    event.stopPropagation();
    this.uiService.setLeftSideNavStatus();
  }

  toggleRightSidenav(event) {
    event.stopPropagation();
    this.uiService.setRightSideNavStatus();
  }

}
