import { Component } from "@angular/core";
import { concat, forkJoin, from, fromEvent, interval, merge, of } from "rxjs";
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
    let myvalues = of(1, 2, 3, 4, 5);
    let myvalues2 = of(6, 7, 8, 9, 10);
    let myvalues3 = of(11, 12, 13, 14, 15);

    concat(myvalues, myvalues2, myvalues3).subscribe((data) => {
      console.log(data);
    });
  }
}
