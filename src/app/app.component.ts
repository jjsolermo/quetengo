import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/main', icon: 'home' },
    { title: 'Nuevo', url: '/create', icon: 'mail' },
    { title: 'Despensa', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Nevera', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Congelador', url: '/folder/Archived', icon: 'archive' },
    { title: 'Otros', url: '/folder/Trash', icon: 'trash' },
    { title: 'Listar Todos', url: '/folder/Spam', icon: 'warning' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
