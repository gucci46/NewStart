import { Component } from '@angular/core';
import { MessageService} from "./message.service";
import { HeroService} from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroesNumber = 0;

  constructor(
      private messageService: MessageService,
      public heroService: HeroService,
      ) {
    this.heroService.heroesChange$.subscribe(res => {
        this.heroesNumber = res.length;
    });
  }

  clearTop5Msg(){
    let result = confirm('確定要清除前五筆訊息嗎？')
    if(result){
      this.messageService.clearMessages();
    }
  }
}
