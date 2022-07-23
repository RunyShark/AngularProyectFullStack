import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  constructor(private AuthService: AuthService) {}

  canActivate(): Observable<boolean> | boolean {
    this.AuthService.validarToken();

    return true;
  }
  canLoad(): Observable<boolean> | boolean {
    this.AuthService.validarToken();
    return true;
  }
}
