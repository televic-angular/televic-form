import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

const appRoutes: Routes = [
	{
		path: 'form-demo',
		loadChildren: './form-demo/form-demo.module#FormDemoModule'
	},
	{
	  path: 'compose',
	  component: ComposeMessageComponent,
	  outlet: 'popup'
	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
