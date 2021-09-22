import { Component } from "@angular/core";
import { from, interval, of } from "rxjs";
import {
  concatMap,
  delay,
  map,
  mapTo,
  mergeMap,
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
    interval(1000)
      .pipe(skip(3), take(5), toArray())
      .subscribe((data) => {
        console.log(data);
      });
  }
}
