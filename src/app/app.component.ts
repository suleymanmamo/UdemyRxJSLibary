import { Component, SkipSelf } from "@angular/core";
import { from } from "rxjs";
import { skip } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    var nums = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    nums.pipe(skip(4)).subscribe((data) => {
      console.log(data);
    });
  }
}
