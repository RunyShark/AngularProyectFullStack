import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/// Validators
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  crudForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    image: '',
  });
  constructor(private fb: FormBuilder) {}
  newIdea() {
    console.log(this.crudForm.value);
    console.log(this.crudForm.valid);
  }
}
