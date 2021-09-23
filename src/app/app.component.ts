import { Component } from "@angular/core";
import { AsyncSubject, concat, interval, Observable, of, Subject } from "rxjs";
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
    const mysub = new AsyncSubject<string>();
    mysub.subscribe((data) => console.log("1." + data));
    mysub.next("1. subscribe değer");
    mysub.subscribe((data) => {
      console.log("2." + data);
    });
    mysub.next("2. subscribe değer");
    mysub.complete();
  }
}
