import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule
} from '@angular/forms';

import { ReactiveWithValidatorsComponent } from './reactive-with-validators.component';
import { ReactiveWithValidatorsRoutingModule } from './reactive-with-validators-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveWithValidatorsRoutingModule
  ],
  declarations: [ReactiveWithValidatorsComponent]
})
export class ReactiveWithValidatorsModule { }
