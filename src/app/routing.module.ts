import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkstationComponent } from './workstation/workstation.component';
import { RouterTestingModule } from '@angular/router/testing';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'workstation',
    component: WorkstationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
