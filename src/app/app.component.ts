import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  title = "UdemyRxJSLibary";

  @ViewChild("btn")
  button: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement, "click").subscribe((data) => {
      console.log(data);
    });
  }
}
