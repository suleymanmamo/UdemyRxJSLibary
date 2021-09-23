import { Component } from "@angular/core";
import {
  AsyncSubject,
  BehaviorSubject,
  concat,
  interval,
  Observable,
  of,
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
    const mysub = new BehaviorSubject<string>("Başlangıç değeri");
    mysub.subscribe((data) => console.log("1. subscribe = " + data));
    mysub.next("1. değer");
    mysub.subscribe((data) => {
      console.log("2. subscribe =" + data);
    });
    mysub.next("2. değer");
    mysub.subscribe((data) => {
      console.log("3. subscribe =" + data);
    });
    mysub.complete();
  }
}
