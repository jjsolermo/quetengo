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
    { title: 'Despensa', url: '/folder/Outbox', icon: 'cart' },
    { title: 'Nevera', url: '/folder/Favorites', icon: 'fast-food' },
    { title: 'Congelador', url: '/folder/Archived', icon: 'ice-cream' },
    { title: 'Otros', url: '/folder/Trash', icon: 'archive' },
    { title: 'Listar Todos', url: '/folder/Spam', icon: 'list' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
