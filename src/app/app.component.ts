import { Component } from "@angular/core";
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    const myobservable = Observable.create((observer) => {
      observer.next("sileman e");
      observer.next("rih u cane");
      observer.complete();
    });
    myobservable.subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {},
      () => {
        console.log("data yayımı bitti şimdi reklamlar");
      }
    );
    myobservable.subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {},
      () => {
        console.log("data yayımı bitti şimdi reklamlar");
      }
    );
  }
}
