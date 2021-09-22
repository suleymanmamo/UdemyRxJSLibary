import { Component } from "@angular/core";
import { forkJoin, from, fromEvent, interval, merge, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  concatMap,
  delay,
  map,
  mapTo,
  mergeAll,
  mergeMap,
  reduce,
  skip,
  startWith,
  switchMap,
  take,
  toArray,
} from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    forkJoin({
      ilkistek: ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1"),
      ikiniciistek: ajax.getJSON(
        "https://jsonplaceholder.typicode.com/posts/3"
      ),
    }).subscribe((data) => {
      console.log(data);
    });
  }
}
