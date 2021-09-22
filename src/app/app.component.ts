import { Component } from "@angular/core";
import { from, fromEvent, interval, merge, of } from "rxjs";
import {
  concatMap,
  delay,
  map,
  mapTo,
  mergeAll,
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
    const click = fromEvent(document, "click");
    const mymerge = click.pipe(map((data) => interval(1000)));

    mymerge.pipe(mergeAll()).subscribe((data) => {
      console.log(data);
    });
  }
}
