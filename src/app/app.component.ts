import { Component } from "@angular/core";
import { concat, interval, Observable, of, Subject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    const myobservable = new Subject();
    myobservable.subscribe((data) => {
      console.log("1." + data);
    });
    myobservable.subscribe((data) => {
      console.log("2." + data);
    });
    myobservable.next(Math.floor(Math.random() * 100));
  }
}
