// angular
import { Component, OnInit } from '@angular/core';
import { ALIAS_VALUE } from 'alias-example/alias-config';

@Component({
  template: `ng-seed (universal) home page<br/>
  Enjoy it!<br/><br/>
  {{ aliasData }}`
})
export class HomeComponent implements OnInit {
    aliasData: string;
    ngOnInit(): void {
        this.aliasData = ALIAS_VALUE;
    }
}
