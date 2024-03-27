import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../store/test2/counter.actions';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.scss'
})
export class MyCounterComponent {


  // count$: any;

  count$: Observable<number> | undefined

  constructor(private store: Store<{ count: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
  }

  increment() {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }

}
