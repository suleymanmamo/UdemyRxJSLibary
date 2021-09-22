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
    const myajax = ajax
      .getJSON("https://jsonplaceholder.typicode.com/posts/1")
      .pipe(delay(2000));

    myajax
      .pipe(
        timeout(3000),
        catchError((err) => of("3 saniyede data gelmedi"))
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
