import { UiService } from '@ktru-services/ui.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent {

  constructor( private uiService: UiService) {}

  toggleLeftSideNav(event) {
    event.stopPropagation();
    this.uiService.setLeftSideNavStatus();
  }

  toggleRightSideNav(event) {
    event.stopPropagation();
    this.uiService.setRightSideNavStatus();
  }
}
