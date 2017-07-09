// angular
import { Component, OnInit } from '@angular/core';
import { FOO } from 'stuff/things';

@Component({
  template: `ng-seed (universal) home page<br/>
  Enjoy it!<br/>`
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {
        console.warn(FOO);
    }
}
