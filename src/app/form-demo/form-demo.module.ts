import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDemoComponent } from './form-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormDemoRoutingModule } from './form-demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormDemoRoutingModule
  ],
  declarations: [FormDemoComponent]
})
export class FormDemoModule { }
