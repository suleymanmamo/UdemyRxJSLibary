import { Component, SkipSelf } from "@angular/core";
import { fromEvent, interval, timer } from "rxjs";
import { skipUntil } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    // const mytimer = interval(1000);
    // mytimer.pipe(skipUntil(timer(5000))).subscribe((val) => {
    //   console.log(val);
    // });

    const myclick = fromEvent(document, "click");
    const myinterval = interval(1000);
    myinterval.pipe(skipUntil(myclick)).subscribe((data) => {
      console.log(data);
    });
  }
}
