import { Component } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    const values = of("Fatih", 4, [1, 2, 3], "Sileman", 4.12);
    values.subscribe((data) => {
      console.log(data);
    });
  }
}
