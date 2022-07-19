import { Component } from '@angular/core';
import { MessageService} from "./message.service";
import { HeroService} from "./hero.service";
import {HttpClient} from "@angular/common/http"

type linkType = {
  dashboard:string;
  heroes:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  linkTitle: linkType = {
    dashboard:"",
    heroes:""
  };

  constructor(
      private messageService: MessageService,
      private http:HttpClient,
      ) {
    this.http.get('assets/data/dashboard-link.json',{ responseType: 'json' }).subscribe(res => {
      this.linkTitle = res as linkType;
    })
  }

  clearTop5Msg(){
    let result = confirm('確定要清除前五筆訊息嗎？')
    if(result){
      this.messageService.clearMessages();
    }
  }
}
