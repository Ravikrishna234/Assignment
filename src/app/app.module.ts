import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { SeriesComponent } from './ans/series/series.component';
// const config: SocketIoConfig = { url: environment.ws_url, options: {} }
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsComponent } from './ans/fields/fields.component';
import { ShareComponent } from './ans/share/share.component';
import { Sample1Component } from './ans/share/sample1/sample1.component';
import { Sample2Component } from './ans/share/sample2/sample2.component';
import { Sample3Component } from './ans/share/sample3/sample3.component';
import { Sample4Component } from './ans/share/sample4/sample4.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    FieldsComponent,
    ShareComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component,
    Sample4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // SocketIoModule.forRoot(config)
  ],
  providers: [ChatService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
