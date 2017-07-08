// angular
import { Component } from '@angular/core';
import { FOO } from 'stuff/things';

@Component({
  template: `ng-seed (universal) home page<br/>
  Enjoy it!<br/>`
})
export class HomeComponent {
    ngOnInit() {
        console.log(FOO);
    }
}
