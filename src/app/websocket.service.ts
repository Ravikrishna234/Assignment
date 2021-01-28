import { Injectable } from '@angular/core';
// import {io} from 'socket.io-client';
import { io } from 'socket.io-client/build/index'
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket;
  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    this.socket = io(environment.ws_url, { transports: ['websocket'] });

    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        console.log('Recieved a message from Websocket');
        observer.next(data);
      })
      return () => {
        this.socket.disconnect();
      }
    })

    let observer = {
      next: (data: object) => {
        console.log(data)
        this.socket.emit('message', JSON.stringify(data));
      }
    }

    return Rx.Subject.create(observer, observable);
  }
}
