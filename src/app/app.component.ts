import { Component } from "@angular/core";
import { concat, forkJoin, from, fromEvent, interval, merge, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  concatMap,
  delay,
  delayWhen,
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
      .getJSON<any>("https://jsonplaceholder.typicode.com/posts/5")
      .pipe(delayWhen((val) => fromEvent(document, "click")))
      .subscribe((data) => {
        console.log(data.userId);
      });
  }
}
