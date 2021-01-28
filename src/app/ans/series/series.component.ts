import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor() { }
  filterKeys = { num:''} as any;
  a = Array()
  endValue:number

  ngOnInit(): void {
  }
  sendNum(f){
    if(this.filterKeys['num']){
      let st_ = 2;
      this.a[0]=st_
      let val_=1;
      for(var i=1;i<=Number(this.filterKeys['num']);i++){
       if(i%2!=0){
         st_ = st_ +val_
       }else{
         let temp=st_ +val_;
         st_ =temp+4;
       }
       val_+=2;
       this.a[i]=st_;
      }
      // console.log(this.a)

    }
    // console.log(this.filterKeys)
    this.endValue = this.a[Number(this.filterKeys['num']) ]
  }
}
