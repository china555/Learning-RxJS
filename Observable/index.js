import { of } from "rxjs";
import { Observable } from "rxjs";
const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete"),
};
// const observable = new Observable((subscribe) => {
//   subscribe.next("Hello");
//   subscribe.next("World");
//   subscribe.complete();
//   //cannot subscribe more after  complete
// });

const observable = new Observable((subscribe) => {
  let count = 0;
  const id = setInterval(() => {
    subscribe.next(count);
    if (count == 10) {
      subscribe.complete();
    }
    // subscribe.complete();
    count += 1;
  }, 1000);
    return () => {
      console.log("called");
      clearInterval(id);
    };
});

console.log("before");
observable.subscribe(observer);
console.log("after");
