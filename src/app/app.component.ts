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
  repeat,
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
      .getJSON("https://jsonplaceholder.typicode.com/posts/1")
      .pipe(repeat(4))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
