// angular
import { Routes } from '@angular/router';

// libs
import { MetaGuard } from '@ngx-meta/core';

// components

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './+home/home.module#HomeModule'
      },
      {
        path: 'about',
        loadChildren: './+about/about.module#AboutModule'
      }
    ],
    canActivateChild: [MetaGuard],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
