import * as React from "react";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  ReactWrapperComponent,
  template,
  encapsulation,
} from "../react-wrapper/react-wrapper.component";
import { IncrementFormJss } from "../../../react/IncrementFormJss";

@Component({
  selector: "app-increment-form",
  // Need to re-import React component's style sheet
  styleUrls: ["./../../../react/IncrementForm.scss"],
  // Must inherit metadata from wrapper component
  template,
  encapsulation,
})
export class IncrementFormWrapperComponent extends ReactWrapperComponent {
  @Input() public counter;
  @Output() public onClick = new EventEmitter<number>();

  render(): JSX.Element {
    return (
      <IncrementFormJss
        counter={this.counter}
        onClick={(increment: number) => this.onClick.emit(increment)}
      />
    );
  }
}
