import { Component } from "@angular/core";
import { from, of } from "rxjs";
import { delay, map, mapTo, mergeMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    of("z", "b", "c", "f", "r", "w")
      .pipe(
        mergeMap((val) =>
          of(1, 2).pipe(
            delay(2000),
            map((num) => val + num)
          )
        )
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
