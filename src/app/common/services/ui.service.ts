import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public leftSideNavStatus$: Subject<void>;
  public rightSideNavStatus$: Subject<void>;

  constructor() {
    this.leftSideNavStatus$ = new Subject();
    this.rightSideNavStatus$ = new Subject();
   }

  public getLeftSideNavStatus(): Subject<void> {
    return this.leftSideNavStatus$;
  }

  public setLeftSideNavStatus(): void {
      this.leftSideNavStatus$.next();
  }

  public getRightSideNavStatus(): Subject<void> {
    return this.rightSideNavStatus$;
  }

  public setRightSideNavStatus(): void {
    this.rightSideNavStatus$.next();
  }

}
