import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './user.component.html',
})
export class UserComponent {
  crudForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    image: '',
  });
  constructor(private fb: FormBuilder) {}
  newIdea() {
    console.log(this.crudForm.value);
    console.log(this.crudForm.valid);
  }
}
