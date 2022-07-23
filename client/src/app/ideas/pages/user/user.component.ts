import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private fb: FormBuilder, private router: Router) {}
  newIdea() {
    console.log(this.crudForm.value);
    console.log(this.crudForm.valid);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/auth');
  }
}
