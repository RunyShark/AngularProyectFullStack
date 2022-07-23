import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AuthRespse,
  AuthLogin,
  Error,
  User,
} from '../interfaces/auth.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user!: User;

  get usuario() {
    return { ...this._user };
  }
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const body = { email, password };
    return this.http
      .post<AuthRespse>('http://localhost:4000/api/auth/login', body)
      .pipe(
        tap((resp) => {
          if (resp.Erro === false) {
            console.log(resp);
            localStorage.setItem('token', resp.user.toke!);
            this._user = {
              uid: resp.user.uid,
              name: resp.user.name,
              email: resp.user.email,
            };
          }
        }),
        map((valid) => valid.Erro),
        catchError((err) => of(err.error))
      );
  }

  register(name: string, email: string, password: string) {
    const newUser = { email, password, name };
    return this.http
      .post<AuthRespse>('http://localhost:4000/api/auth/register', newUser)
      .pipe(
        tap((resp) => {
          if (resp.Erro === false) {
            localStorage.setItem('token', resp.user.toke!);

            this._user = {
              uid: resp.user.uid,
              name: resp.user.name,
              email: resp.user.email,
            };
          }
        }),
        map((valid) => valid.Erro),
        catchError((err) => of(err))
      );
  }

  validarToken(): Observable<boolean> {
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http
      .get<any>('http://localhost:4000/api/auth/token', { headers })
      .pipe(
        map((res) => {
          console.log(res.ok);
          return res.ok;
        }),
        catchError((err) => of(false))
      );
  }
}
