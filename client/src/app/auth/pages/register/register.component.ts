import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  loginForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serviceLogin: AuthService
  ) {}

  register() {
    const { name, email, password } = this.loginForm.value;
    this.serviceLogin.register(name, email, password).subscribe((ok) => {
      console.log(ok);
      if (!ok) {
        this.router.navigateByUrl('/home');
      } else {
        if (ok.msg) {
          Swal.fire('Error', ok.msg, 'error');
        }
        const { msg } = ok.errors[0];
        Swal.fire('Error', msg, 'error');
      }
    });

    this.router.navigateByUrl('/home');
  }
}
