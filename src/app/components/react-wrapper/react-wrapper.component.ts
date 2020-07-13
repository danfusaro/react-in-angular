import {
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
  DoCheck,
} from "@angular/core";
import * as ReactDOM from "react-dom";

const containerElementName = "reactWrapper";

export const reactWrapperMetadata = {
  template: `<div #${containerElementName}></div>`,
  encapsulation: ViewEncapsulation.None,
};

@Component({
  selector: "app-react-wrapper",
  ...reactWrapperMetadata,
})
export class ReactWrapperComponent implements OnDestroy, DoCheck {
  @ViewChild(containerElementName, { static: false }) containerRef: ElementRef;

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  ngDoCheck() {
    if (this.containerRef && this.containerRef.nativeElement) {
      this.doRender();
    }
  }

  protected render(): JSX.Element {
    throw new Error("Must be implemented in sub-class");
  }

  private doRender() {
    ReactDOM.render(this.render(), this.containerRef.nativeElement);
  }
}
