import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service'

@Component({
  selector: 'app-sample4',
  templateUrl: './sample4.component.html',
  styleUrls: ['./sample4.component.css']
})
export class Sample4Component implements OnInit {
  text:string;

  constructor(private cmn:CommonService) {
    this.cmn.text.subscribe(res=>{
      this.text =res;      
    })
     }

  ngOnInit(): void {
  }

}
