# Embedding React in Angular (as of 7/2020 - version 8.0)

This project shows how to embed a React component within an Angular application, 
in a simple way and without any complex 3rd party libraries. 

Inspiration: https://medium.com/@zacky_14189/embedding-react-components-in-angular-the-easy-way-60f796b68aef

## Overview
1. Add dependencies to `package.json`
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
3. Add CommonJS support for react in `angular.json`
```
"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
     "allowedCommonJsDependencies": [
        "react",
        "react-dom"
     ]
     ...
   }
   ...
},
```

4. Add CUSTOM_ELEMENTS_SCHEMA to `app.module.ts`
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add to schemas array
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

5. Extend `ReactWrapperComponent`, add url to React component's style sheet., add metadata values (`...reactWrapperMetadata`):
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

Run `ng serve`
