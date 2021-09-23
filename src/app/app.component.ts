import { Component } from "@angular/core";
import { concat, forkJoin, from, fromEvent, interval, merge, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  catchError,
  concatMap,
  delay,
  delayWhen,
  finalize,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  reduce,
  repeat,
  retry,
  retryWhen,
  skip,
  startWith,
  switchMap,
  take,
  tap,
  timeout,
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
    let myinterval = interval(1000).pipe(
      map((val) => {
        if (val > 6) {
          throw "değer 6 dan büyük";
        } else {
          return val;
        }
      })
    );

    myinterval
      .pipe(
        retryWhen((err) =>
          err.pipe(
            tap((x) => console.log(x)),
            delay(3000)
          )
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
