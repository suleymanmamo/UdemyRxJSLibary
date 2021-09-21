import { Component } from "@angular/core";
import { from } from "rxjs";
import { first } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";
  constructor() {
    const myarray = from([
      5, 10, 15, 20, 50, 100, 200, 300, 350, 400, 750, 800,
    ]);

    myarray.pipe(first((val) => val > 15)).subscribe((data) => {
      console.log(data);
    });
  }
}
