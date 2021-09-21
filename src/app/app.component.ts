import { Component } from "@angular/core";
import { fromEvent, interval } from "rxjs";
import { throttle } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    const myinterval = interval(1000);
    // myinterval.pipe(throttle((x) => interval(2000))).subscribe((data) => {
    //   console.log(data);
    // });

    fromEvent(document, "click")
      .pipe(throttle((x) => interval(5000)))
      .subscribe((data) => {
        console.log(data, "click");
      });
  }
}
