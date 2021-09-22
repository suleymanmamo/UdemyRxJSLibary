import { Component } from "@angular/core";
import { from } from "rxjs";
import { map, mapTo } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "UdemyRxJSLibary";

  constructor() {
    const users = from([
      { name: "cabbar", surname: "kökdal", email: "cabbar@gmail.com" },
      { name: "ali hıdır", surname: "meşe", email: "ali.hidir@gmail.com" },
      { name: "arthur", surname: "doyle", email: "arthurdoyle@gmail.com" },
      { name: "ahmet arif", surname: "meşe", email: "ahmedarifmese@gmail.com" },
      { name: "sileman", surname: "mamo", email: "adar.suleyman@gmail.com" },
    ]);
    users.pipe(mapTo("sabit değer")).subscribe((data) => {
      console.log(data);
    });
  }
}
