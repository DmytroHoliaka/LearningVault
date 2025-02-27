import {Component, computed, DestroyRef, effect, inject, OnInit, signal} from '@angular/core';
import {interval, map, Observable} from "rxjs";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  // interval = signal(0);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, {initialValue: 0});
  // doubleInterval = computed(() => this.interval() * 2);
  customInterval$ = new Observable(subscriber => {
    let timesExecuted = 0;

    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value ...');
      subscriber.next({message: 'New value'});
      timesExecuted += 1;
    }, 2000);
  });

  constructor() {
    // effect(() => {
    //   console.log(`Clicked button ${this.clickCount()} times.`);
    // });
  }

  ngOnInit(): void {
    // const observable = interval(1000);
    // const subscription = observable
    //   .pipe(
    //     map((oldValue) => oldValue * 2),
    //   )
    //   .subscribe({
    //     next: (value) => console.log(`Generated value: ${value}`)
    //   });
    //
    // this.destroyRef.onDestroy(() => subscription.unsubscribe());

    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("The emitting has been completed"),
      error: (err) => console.log(err),
    });

    // const subscription = this.clickCount$
    //   .pipe(map((oldValue) => oldValue * 2))
    //   .subscribe((value) => console.log(value));
    //
    // this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  OnClick() {
    this.clickCount.update(oldValue => oldValue + 1);
  }
}
