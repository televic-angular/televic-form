import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {
	
  myForm: FormGroup;
  name: AbstractControl;
  age: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'name': ['ABC123'],
      'age': [35]
    });

    this.name = this.myForm.controls['name'];
    this.age = this.myForm.controls['age'];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
