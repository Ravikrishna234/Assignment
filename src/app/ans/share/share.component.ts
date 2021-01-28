import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {CommonService} from './common.service'
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(private cmn:CommonService) { }
text= new Subject<any>();
filterKeys = { text:''} as any;

  ngOnInit(): void {
  }
  update(){
    // console.log(this.filterKeys)
    this.cmn.text.next(this.filterKeys['text'])
  }
}
