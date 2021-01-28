import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service'

@Component({
  selector: 'app-sample3',
  templateUrl: './sample3.component.html',
  styleUrls: ['./sample3.component.css']
})
export class Sample3Component implements OnInit {

  text:string;

  constructor(private cmn:CommonService) {
    this.cmn.text.subscribe(res=>{
      this.text =res;      
    })
     }
  ngOnInit(): void {
  }

}
