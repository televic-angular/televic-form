import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormComponent } from './reactive-form.component';

const reactiveFormRoutes: Routes = [
	{
		path: 'reactive-form',
		component: ReactiveFormComponent
	}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(reactiveFormRoutes)
  ],
  exports: [
  	RouterModule
  ]
})
export class ReactiveFormRoutingModule { }
