import { FcAuthorizationService } from './fc-authorization.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public authForm!: FormGroup;
  public actionControls!: FormArray;

  constructor(
    private fcAuthorizationService: FcAuthorizationService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.actionControls = this.fcAuthorizationService.getActionControls();
    console.log('actionControls: ', this.actionControls);
    this.authForm = this.fb.group({
      actions: this.actionControls,
    });
  }

  onSubmit() {
    console.log('Submit');
  }
}
