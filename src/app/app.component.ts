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
  startWith,
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
    from(["ahmet", "mehmet", "hasan", "mahmut"])
      .pipe(startWith("mirya", "solin"))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
