import { Directive, HostBinding, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Directive({
  selector: '[appSnt]'
})
export class SntDirective implements OnInit {

  constructor (private _sanitizer: DomSanitizer) {}
  @Input('appSnt') innerText: string;
  @HostBinding('innerHtml') innerHtml: SafeHtml;
  ngOnInit() {
    this.innerHtml = this._sanitizer.bypassSecurityTrustHtml(this.innerText);
  }

}
