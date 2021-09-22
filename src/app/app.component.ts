import { Component } from "@angular/core";
import { concat, forkJoin, from, fromEvent, interval, merge, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  concatMap,
  delay,
  delayWhen,
  finalize,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  reduce,
  skip,
  startWith,
  switchMap,
  take,
  tap,
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
    ajax
      .getJSON("https://jsonplaceholder.typicode.com/posts")
      .pipe(
        take(5),
        finalize(() => {
          console.log("data alma işlemi bitti");
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
