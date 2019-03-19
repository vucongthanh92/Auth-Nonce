import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkstationComponent } from './workstation/workstation.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'workstation',
    component: WorkstationComponent
  },
  {
    path: 'customer/:id',
    component: CustomerComponent
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
