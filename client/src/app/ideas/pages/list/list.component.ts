import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../service/ideas.service';
import { Result } from '../../interface/ideas.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  ideas: Result[] = [];

  constructor(private idea: IdeasService, private router: Router) {}
  ngOnInit(): void {
    this.idea.getIdeas().subscribe((res) => (this.ideas = res.results));
  }
  redirecReviw(id: number) {
    this.router.navigateByUrl(`/home/reviw/${id}`);
  }
  redirecUpdate(id: number) {
    console.log(id);
    this.router.navigateByUrl(`/home/update/${id}`);
  }
}
