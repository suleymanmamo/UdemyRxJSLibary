import { Component } from "@angular/core";
import { interval } from "rxjs";
// import { of } from "rxjs"; \\

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    // const values = of("Fatih", 4, [1, 2, 3], "Sileman", 4.12);
    // values.subscribe((data) => {
    //   console.log(data);
    // }); bölüm 3:3

    const publisher = interval(10000);
    publisher.subscribe(
      (val) => {
        console.log("dinya" + val);
      },
      (err) => {},
      () => {
        // console.log("veri alma tamamlandı");
      }
    );
  }
}
