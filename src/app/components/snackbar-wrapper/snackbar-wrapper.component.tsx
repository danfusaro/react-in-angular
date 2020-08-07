import * as React from "react";
import { Component, OnInit } from "@angular/core";
import {
  ReactWrapperComponent,
  template,
  encapsulation,
} from "../react-wrapper/react-wrapper.component";
import SimpleSnackbar from "../../../react/Snackbar";
import Skeleton from "../../../react/Skeleton";
import { timer, Observable } from "rxjs";

@Component({
  selector: "app-snackbar",
  // Must inherit metadata from wrapper component
  template,
  encapsulation,
})
export class SnackbarWrapperComponent extends ReactWrapperComponent
  implements OnInit {
  delay$: Observable<number> = timer(1000);
  private ready = false;

  ngOnInit() {
    this.delay$.subscribe(() => (this.ready = true));
  }
  render(): JSX.Element {
    if (!this.ready) {
      return (
        <Skeleton variant="rectangular" width="100" height="100">
          Look I am a Skeleton instance
        </Skeleton>
      );
    }
    return <SimpleSnackbar />;
  }
}
