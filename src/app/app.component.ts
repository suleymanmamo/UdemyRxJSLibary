import { Component } from "@angular/core";
import { from, interval, of } from "rxjs";
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
    of(1, 2, 3, 4, 5, 6, 7, 8, 9)
      .pipe(reduce((acc, val) => acc + val))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
