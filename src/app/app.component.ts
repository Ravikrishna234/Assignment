import { Component, OnInit } from '@angular/core';
import { ChatService } from '../app/chat.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chat';

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    // this.chatService.message.subscribe(msg => {
    //   console.log(msg)
    // })
  }

  sendMsg() {
    this.chatService.sendMsg('Test Message')
  }
}
