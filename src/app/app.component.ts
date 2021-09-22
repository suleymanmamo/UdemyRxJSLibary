import { Component } from "@angular/core";
import { from, fromEvent, interval, merge, of } from "rxjs";
import {
  concatMap,
  delay,
  map,
  mapTo,
  mergeMap,
  reduce,
  skip,
  switchMap,
  take,
  toArray,
} from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    const myevent = fromEvent(document, "click");
    const myinterval = interval(1000);

    const mymerge = merge(myevent, myinterval).subscribe((data) => {
      console.log(data);
    });
  }
}
