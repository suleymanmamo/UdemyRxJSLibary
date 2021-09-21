import { Component } from "@angular/core";
import { from } from "rxjs";
import { skipWhile } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 17, 18, 19])
      .pipe(skipWhile((x) => x < 5))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
