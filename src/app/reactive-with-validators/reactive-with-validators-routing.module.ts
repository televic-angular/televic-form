import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveWithValidatorsComponent } from './reactive-with-validators.component';

const reactiveWithValidatorsRoutes: Routes = [
	{
		path: 'reactive-with-validators',
		component: ReactiveWithValidatorsComponent
	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(reactiveWithValidatorsRoutes)
  ],
  exports: [
  	RouterModule
  ]
})
export class ReactiveWithValidatorsRoutingModule { }
