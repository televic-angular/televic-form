import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators,
  FormControl
} from '@angular/forms';

import * as localValidators from '../shared/local-validators';

/**
 * Our custom validator
 *
 * A validator:
 * - Takes a `Control` as it's input and
 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
 *   the value is `true` if it fails
 */

@Component({
  selector: 'app-reactive-with-validators',
  templateUrl: './reactive-with-validators.component.html',
  styleUrls: ['./reactive-with-validators.component.sass']
})
export class ReactiveWithValidatorsComponent implements OnInit {

	myForm: FormGroup;
	name: AbstractControl;
	age: AbstractControl;

	constructor(fb: FormBuilder) {
		this.myForm = fb.group({
			'name': ['', Validators.required],
			'age': ['', Validators.compose([
				Validators.required, 
				localValidators.ageValidator
			])]
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
