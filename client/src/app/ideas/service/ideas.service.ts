import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdeaRes, IdeaPost, GetIdeas } from '../interface/ideas.interface';
@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  constructor(private http: HttpClient) {}

  getIdeas(): Observable<GetIdeas> {
    return this.http.get<GetIdeas>('http://localhost:4000/api/idea');
  }

  postIdea(idea: IdeaPost): Observable<IdeaRes> {
    return this.http.post<IdeaRes>('http://localhost:4000/api/idea', idea);
  }

  putIdea(id: number, user: any) {}

  deleteIdea(id: number, user: any) {}
}
