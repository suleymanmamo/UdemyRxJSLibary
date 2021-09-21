import { Component } from "@angular/core";
import { ajax } from "rxjs/ajax";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    ajax.getJSON("https://jsonplaceholder.typicode.com/todos/5").subscribe(
      (data) => {
        console.table(data);
      },
      (err) => {},
      () => {
        console.log("ajax isteği bitti");
      }
    );
  }
}
