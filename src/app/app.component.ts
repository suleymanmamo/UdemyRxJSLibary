import { Component } from "@angular/core";
import { defer, of, timer } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";
  subscription;

  constructor() {
    const map = new Map();
    map.set(1, "Kitaplar");
    map.set(2, "Kalem");
    map.set(3, "Silgiler");

    const publisher = of(new Date());
    const publisher2 = defer(() => of(new Date()));
    const timer1 = timer(3000);
    timer1.subscribe((data) => {
      publisher.subscribe((val1) => console.log("of => " + val1));
      publisher2.subscribe((val2) => console.log("defer => " + val2));
    });
  }
}
