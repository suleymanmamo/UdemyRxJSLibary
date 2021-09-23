import { Component } from "@angular/core";
import {
  AsyncSubject,
  BehaviorSubject,
  concat,
  interval,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from "rxjs";
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
    let mysub = new ReplaySubject(3);
    mysub.next(1);
    mysub.next(2);
    mysub.subscribe((data) => console.log("1. subscribe = " + data));
    mysub.next(3);
    mysub.next(4);
    mysub.subscribe((data) => console.log("2. subscribe = " + data));
  }
}
