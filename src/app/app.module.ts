import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveWithValidatorsModule } from './reactive-with-validators/reactive-with-validators.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormModule,
    ReactiveWithValidatorsModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
