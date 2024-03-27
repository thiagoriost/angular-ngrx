import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter/counter.component';
import { TodoComponent } from './components/todo/todo.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent,TodoComponent, MyCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ngrx';
}
