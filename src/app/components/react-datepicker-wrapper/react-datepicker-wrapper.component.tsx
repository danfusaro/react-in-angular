import * as React from "react";
import DatePicker from "react-datepicker";
import { Component } from "@angular/core";
import {
  ReactWrapperComponent,
  reactWrapperMetadata,
} from "src/app/components/react-wrapper/react-wrapper.component";

@Component({
  selector: "app-react-datepicker",
  styleUrls: [
    "../../../../node_modules/react-datepicker/dist/react-datepicker.css",
  ],
  ...reactWrapperMetadata,
})
export class ReactDatepickerWrapperComponent extends ReactWrapperComponent {
  state = {
    startDate: new Date(),
  };

  render(): JSX.Element {
    const [startDate, setStartDate] = React.useState(new Date());
    return <DatePicker selected={startDate} onChange={setStartDate} />;
  }
}
