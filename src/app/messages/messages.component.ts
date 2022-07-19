import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

  deleteConfirm(){
    let result = confirm("您確定要清空訊息嗎？清空就回不來囉！");
    if(result){
      this.messageService.clear();
    }
  }

}
