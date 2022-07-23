import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {
  IdeaRes,
  IdeaPost,
  GetIdeas,
  Delete,
  Update,
  NewRess,
} from '../interface/ideas.interface';
@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  constructor(private http: HttpClient) {}

  getIdeas(): Observable<GetIdeas> {
    return this.http.get<GetIdeas>('http://localhost:4000/api/idea');
  }
  getById(id: number): Observable<NewRess> {
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http.get<NewRess>(
      `http://localhost:4000/api/idea/ideaByID/${id}`,
      { headers }
    );
  }

  postIdea(idea: IdeaPost): Observable<IdeaRes> {
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http
      .post<IdeaRes>('http://localhost:4000/api/idea', idea, {
        headers,
      })
      .pipe(catchError((err) => of(err.error)));
  }

  putIdea(data: any) {
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http
      .put<Update>(`http://localhost:4000/api/idea/${data.id}`, data, {
        headers,
      })
      .pipe(catchError((err) => of(err.error)));
  }

  deleteIdea(idea: any) {
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );
    return this.http
      .delete<any>(`http://localhost:4000/api/idea/${idea.id}`, {
        headers,
      })
      .pipe(catchError((err) => of(err.error)));
  }
}
