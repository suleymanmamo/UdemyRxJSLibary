import { Component } from "@angular/core";
import { from } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    // const numbers = from([85, 23, 57, 36, 12, 68, 5, 18, 17, 25, 24, 68]);
    // numbers.pipe(map((val) => val + 10)).subscribe((data) => {
    //   console.log(data);
    // });

    const users = from([
      { name: "cabbar", surname: "kökdal", email: "cabbar@gmail.com" },
      { name: "ali hıdır", surname: "meşe", email: "ali.hidir@gmail.com" },
      { name: "arthur", surname: "doyle", email: "arthurdoyle@gmail.com" },
      { name: "ahmet arif", surname: "meşe", email: "ahmedarifmese@gmail.com" },
      { name: "sileman", surname: "mamo", email: "adar.suleyman@gmail.com" },
    ]);
    users.pipe(map((user) => user.name)).subscribe((data) => {
      console.log(data);
    });
  }
}
