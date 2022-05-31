import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/main', icon: 'home' },
    { title: 'Nuevo', url: '/create', icon: 'restaurant' },
    { title: 'Despensa', url: '/despensa', icon: 'cart' },
    { title: 'Nevera', url: '/nevera', icon: 'fast-food' },
    { title: 'Congelador', url: '/congelador', icon: 'ice-cream' },
    { title: 'Otros', url: '/otros', icon: 'archive' },
    { title: 'Listar Todos', url: '/todos', icon: 'list' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
