import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../service/ideas.service';
import { Result } from '../../interface/ideas.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  ideas: Result[] = [];
  constructor(private idea: IdeasService) {}

  ngOnInit(): void {
    this.idea.getIdeas().subscribe((res) => (this.ideas = res.results));
  }
}
