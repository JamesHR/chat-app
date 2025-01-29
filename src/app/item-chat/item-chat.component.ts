import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-chat',
  templateUrl: './item-chat.component.html',
  styleUrls: ['./item-chat.component.scss'],
  standalone: false
})
export class ItemChatComponent  implements OnInit {

  @Input() username: string = '';
  @Input() message: string = '';
  @Input() avatarUrl: string = '';
  @Input() date: string = '';

  constructor() { }

  ngOnInit() {}

}
