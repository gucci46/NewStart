import { Component } from '@angular/core';
import {MessageService} from "./message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private messageService:MessageService) {
  }

  clearTop5Msg(){
    let result = confirm('確定要清除前五筆訊息嗎？')
    if(result){
      this.messageService.clearMessages();
    }
  }
}
