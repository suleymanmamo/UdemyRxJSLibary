import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  title = "UdemyRxJSLibary";

  @ViewChild("textSearch")
  textSearch: ElementRef;
  constructor() {}

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.textSearch.nativeElement, "keyup")
      .pipe(debounceTime(300))
      .subscribe((data) => {
        console.log((data.target as HTMLInputElement).value);
      });
  }
}
