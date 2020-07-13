import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ReactWrapperComponent } from "./components/react-wrapper/react-wrapper.component";
import { IncrementFormWrapperComponent } from "./components/increment-form-wrapper/increment-form-wrapper.component";

@NgModule({
  declarations: [
    AppComponent,
    ReactWrapperComponent,
    IncrementFormWrapperComponent,
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
