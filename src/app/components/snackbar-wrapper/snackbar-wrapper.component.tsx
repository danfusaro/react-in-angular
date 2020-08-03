import * as React from "react";
import { Component } from "@angular/core";
import {
  ReactWrapperComponent,
  template,
  encapsulation,
} from "../react-wrapper/react-wrapper.component";
import SimpleSnackbar from "../../../react/Snackbar";

@Component({
  selector: "app-snackbar",
  // Must inherit metadata from wrapper component
  template,
  encapsulation,
})
export class SnackbarWrapperComponent extends ReactWrapperComponent {
  render(): JSX.Element {
    return <SimpleSnackbar />;
  }
}
