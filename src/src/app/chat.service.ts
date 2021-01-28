import { Injectable } from '@angular/core';
import { WebsocketService } from '../app/websocket.service';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  message: Subject<any>;

  constructor(private wsService: WebsocketService) {
    this.message = <Subject<any>>wsService
      .connect()
    map((response: any): any => {
      return response
    })
  }
  // sendMessage(msg) {
  //   this.socket.emit('message', msg)
  // }

  // getMessage() {
  //   return this.socket
  //     .fromEvent('message')
  //     .pipe(map((data) => data['msg']))
  // }

  sendMsg(msg) {
    this.message.next(msg);
  }
}
