import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service'

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {

  text:string;

  constructor(private cmn:CommonService) {
    this.cmn.text.subscribe(res=>{
      this.text =res;      
    })
     }
  ngOnInit(): void {
  }

}
