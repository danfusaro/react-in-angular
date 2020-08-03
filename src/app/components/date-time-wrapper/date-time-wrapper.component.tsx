import * as React from "react";
import { Component } from "@angular/core";
import {
  ReactWrapperComponent,
  template,
  encapsulation,
} from "../react-wrapper/react-wrapper.component";
import { DateTimePicker } from "../../../react/DateTimePicker";

@Component({
  selector: "app-date-time",
  // Must inherit metadata from wrapper component
  template,
  encapsulation,
})
export class DateTimeWrapperComponent extends ReactWrapperComponent {
  render(): JSX.Element {
    return <DateTimePicker />;
  }
}
