import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: ['cdorreo@correo.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serviceLoin: AuthService
  ) {}

  login() {
    const { email, password } = this.loginForm.value;
    this.serviceLoin.login(email, password).subscribe((ok) => {
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
  }
}
