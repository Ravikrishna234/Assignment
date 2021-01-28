import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service'

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit {

  text:string;

  constructor(private cmn:CommonService) {
    this.cmn.text.subscribe(res=>{
      this.text =res;      
    })
     }
  ngOnInit(): void {
  }

}
