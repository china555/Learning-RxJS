import { of } from "rxjs";
import { Observable } from "rxjs";
const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete"),
};
const observable = new Observable((subscribe) => {
  subscribe.next("Hello");
  subscribe.next("World");
  subscribe.complete();
  //cannot subscribe more after  complete
});

observable.subscribe(observer);
