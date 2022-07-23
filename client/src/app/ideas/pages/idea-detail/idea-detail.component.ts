import { Component, Input, OnInit } from '@angular/core';
import { IdeasService } from '../../service/ideas.service';
import { Result } from '../../interface/ideas.interface';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css'],
})
export class IdeaDetailComponent {
  @Input() idea!: Result | undefined;
}
