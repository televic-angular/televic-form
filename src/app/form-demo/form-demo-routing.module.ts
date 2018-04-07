import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormDemoComponent } from './form-demo.component';

const formDemoRoutes: Routes = [
	{
		path: 'form-demo',
		component: FormDemoComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(formDemoRoutes)
  ],
  exports: [
  	RouterModule
  ]
})
export class FormDemoRoutingModule { }
