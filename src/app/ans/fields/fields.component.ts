import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

 
 
    phoneForm: FormGroup;
    field: FormArray;
  
    constructor(private fb: FormBuilder) { }
  
    ngOnInit() {
      this.phoneForm = this.fb.group({
        field : this.fb.array([this.createItem()])
      })
    }
    removeItemC(val){
      const control = <FormArray>this.phoneForm.controls.field;
      control.removeAt(val);
    
    }
    createItem() {
      return this.fb.group({
        phone: new FormControl(''),
      })
    }
  
    addItem() {
      this.field = this.phoneForm.get('field') as FormArray;
      this.field.push(this.createItem());
    }
  
    submit() {
      console.log(this.phoneForm.value.field );
    }
  }
  
