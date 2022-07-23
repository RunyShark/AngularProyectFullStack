import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get<NewRess>(
      `http://localhost:4000/api/idea/ideaByID/${id}`
    );
  }

  postIdea(idea: IdeaPost): Observable<IdeaRes> {
    return this.http.post<IdeaRes>('http://localhost:4000/api/idea', idea);
  }

  putIdea(data: any) {
    console.log(data);
    return this.http.put<Update>(
      `http://localhost:4000/api/idea/${data.id}`,
      data
    );
  }

  deleteIdea(idea: any) {
    return this.http.delete<any>(`http://localhost:4000/api/idea/${idea.id}`);
  }
}
