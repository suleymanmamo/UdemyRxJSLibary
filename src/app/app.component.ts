import { Component } from "@angular/core";

// import { of } from "rxjs"; \\
// import { interval } from "rxjs"; \\
// import { timer } from "rxjs";
import { range } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";
  subscription;

  constructor() {
    //bölüm 3:3 \\
    // const values = of("Fatih", 4, [1, 2, 3], "Sileman", 4.12);
    // values.subscribe((data) => {
    //   console.log(data);
    // });
    //***********************************************\\
    //  bölüm 3:4\\
    // const publisher = interval(10000);
    // publisher.subscribe(
    //   (val) => {
    //     console.log("dinya" + val);
    //   },
    //   (err) => {},
    //   () => {
    //     // console.log("veri alma tamamlandı");
    //   }
    // );
    //***********************************************\\
    // bölüm 3:5/1 \\
    // 2 saniye sonra tek işlem yapar
    // const publisher = timer(2000);
    // publisher.subscribe(
    //   (data) => {
    //     console.log("bu yazı 2 saniye sonra çalışacaktır");
    //   },
    //   (err) => {},
    //   () => {
    //     console.log("veri alma tamamlandı");
    //   }
    // );
    // bölüm 3:5/2 \\
    // 5 saniye sonra 2 saniyede bir değer tekrarlar
    // const publisher = timer(3000, 2000);
    // this.subscription = publisher.subscribe(
    //   (val) => {
    //     console.log("bu yazı 5 saniye sonra çalışacaktır = " + val);
    //   },
    //   (err) => {},
    //   () => {
    //     console.log("veri alma tamamlandı");
    //   }
    // );
    //***********************************************\\
    // bölüm 3:6

    const publisher = range(1, 20);
    this.subscription = publisher.subscribe(
      (val) => {
        console.log("gelen değer = " + val);
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
