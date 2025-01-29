import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemChatComponent } from '../item-chat/item-chat.component';



@NgModule({
  declarations: [
    ItemChatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemChatComponent
  ]
})
export class ComponentsModule { }
