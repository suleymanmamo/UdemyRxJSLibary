import { Component } from "@angular/core";
import { from } from "rxjs";

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

    const publisher = from(map);
    this.subscription = publisher.subscribe(
      (val) => {
        console.log(`${val[0]} = ${val[1]}`);
      },
      (err) => {},
      () => {
        console.log("veri alma tamamlandı");
      }
    );
  }

  // bölüm 3:5/2 \\
  // stop() {
  //   this.subscription.unsubscribe();
  // }
}
