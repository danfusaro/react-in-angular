import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactWrapperComponent } from './components/react-wrapper/react-wrapper.component';
import { IncrementFormWrapperComponent } from './components/increment-form-wrapper/increment-form-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactWrapperComponent,
    IncrementFormWrapperComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
