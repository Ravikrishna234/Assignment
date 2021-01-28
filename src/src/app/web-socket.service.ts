import { Injectable } from '@angular/core';
import {io} from 'socket.io-client/build/index';
import {Observable} from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  // private readonly url:string="https://hrsimplyturn.herokuapp.com/"
   readonly url:string='http://localhost:3000'
  socket:any;

  constructor() { 
    this.socket = io(this.url);
    // this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});


    console.log(this.socket)
  }
  listen(event:string){
    console.log(event);
    return new Observable((observer) => {
      this.socket.on(event, (message) => {
          observer.next(message);
      });
});
  }
  emit(event:string,data:any){
    this.socket.emit(event,data)
  }
}
