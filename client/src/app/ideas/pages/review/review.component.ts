import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-eliminar',
  templateUrl: './review.component.html',
})
export class ReviewComponent {
  crudForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    score: 0,
  });

  constructor(private fb: FormBuilder) {}
  newIdea() {
    console.log(this.crudForm.value);
    console.log(this.crudForm.valid);
  }
}
