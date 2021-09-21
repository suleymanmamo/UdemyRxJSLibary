import { Component } from "@angular/core";
import { from } from "rxjs";
import { single } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";
  constructor() {
    const myarray = from(["ahmet", "halil", "celil"]);

    myarray.pipe(single((val) => val == "celil")).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err.message);
      },
      () => {}
    );
  }
}
