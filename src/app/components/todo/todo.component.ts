import { Component, inject } from '@angular/core';
import { StoreApp } from '../../store/storeApp';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  // providers: [StoreApp],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  store = inject(StoreApp)


}
