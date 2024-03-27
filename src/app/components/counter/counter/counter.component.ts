import { Component, computed, effect, inject, signal } from '@angular/core';
import { StoreApp } from '../../../store/storeApp';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  // providers: [StoreApp],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {




  counter = signal<number>(0)
  double = computed(()=> this.counter() * 2)
  store = inject(StoreApp)

  constructor(){
    effect(()=>{
      console.log("valor ", this.counter(), this.double())
    })
  }
  // counter = 0;


  add() {
    console.log("increment");

    this.counter.update((v: number) => v + 1)
    console.log("valor => ", this.counter() + 1);

    this.store.addToCar(
      {
        id: 1,
        item: 'test2'
      }
    );
    // this.counter = this.counter + val;
  }

  remover(id: number){
    this.store.removerItemDelCarro(id)
  }

  reset() {
    this.counter.set(0);
    this.store.clearCarro()
  }



}
