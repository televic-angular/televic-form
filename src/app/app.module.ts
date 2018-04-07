import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormDemoModule } from './form-demo/form-demo.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveWithValidatorsModule } from './reactive-with-validators/reactive-with-validators.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormDemoModule,
    ReactiveFormModule,
    ReactiveWithValidatorsModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
