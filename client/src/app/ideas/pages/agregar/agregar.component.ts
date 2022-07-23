import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {} from '../../interface/ideas.interface';
import { IdeasService } from '../../service/ideas.service';
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
  constructor(private fb: FormBuilder, private idea: IdeasService) {}
  newIdea() {
    this.idea
      .postIdea(this.crudForm.value)
      .subscribe((res) => console.log(res));
  }
}
