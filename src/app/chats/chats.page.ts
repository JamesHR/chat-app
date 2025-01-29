import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: false
})
export class ChatsPage implements OnInit {

  chats: any[] = [
    {
      username: 'Jaime HR',
      message: 'Bienvenido a la práctica chatApp',
      date: '14:25',
      avatarUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
