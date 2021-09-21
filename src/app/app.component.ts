import { Component } from "@angular/core";
import { interval } from "rxjs";
import { throttleTime } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    interval(1000)
      .pipe(throttleTime(5000))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
