import { Component } from "@angular/core";
import { forkJoin, from, fromEvent, interval, merge, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  concatMap,
  delay,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  reduce,
  skip,
  startWith,
  switchMap,
  take,
  toArray,
  withLatestFrom,
} from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    const myinterval = interval(1000);
    fromEvent(document, "click")
      .pipe(withLatestFrom(myinterval))
      .subscribe((data) => {
        console.log(data[1]);
      });
  }
}
