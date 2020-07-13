# Embedding React in Angular

This project shows how to embed a React component within an Angular application, 
in a simple way and without any complex 3rd party libraries. 

Inspiration: https://medium.com/@zacky_14189/embedding-react-components-in-angular-the-easy-way-60f796b68aef

## Using in other projects
1. Add dependencies
```
"dependencies": {
    ...
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    ...
  },
"devDependencies": {
    ...
    "@types/react": "^16.9.17",
    "@types/react-dom": "^16.9.4",
    ...
}
```

2. Update `tsconfig.json`
```
{
     ... 
     "jsx": "react",
     ...
}
```

3. Extend `ReactWrapperComponent`, add url to React component's style sheet., add metadata values (`...reactWrapperMetadata`):
```
import * as React from "react";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  ReactWrapperComponent,
  reactWrapperMetadata,
} from "src/app/components/react-wrapper/react-wrapper.component";
import { IncrementForm } from "src/react/IncrementForm";

@Component({
  selector: "app-increment-form",
  // Need to re-import React component's style sheet
  styleUrls: ["./../../../react/IncrementForm.scss"],
  // Must inherit metadata from wrapper component
  ...reactWrapperMetadata,
})
export class IncrementFormWrapperComponent extends ReactWrapperComponent {
  @Input() public counter;
  @Output() public onClick = new EventEmitter<number>();

  render(): JSX.Element {
    return (
      <IncrementForm
        counter={this.counter}
        onClick={(increment: number) => this.onClick.emit(increment)}
      />
    );
  }
}
```

## Run

Run `ng serve --open`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
