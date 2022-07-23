import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewRess } from '../../interface/ideas.interface';
import { IdeasService } from '../../service/ideas.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css'],
})
export class EliminarComponent implements OnInit {
  ideas!: NewRess;
  crudForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    image: '',
  });
  constructor(
    private fb: FormBuilder,
    private idea: IdeasService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.ActivatedRoute.params
      .pipe(switchMap(({ id }) => this.idea.getById(id)))
      .subscribe((res) => (this.ideas = res));
  }

  deleteIdea(id: number) {
    this.idea.deleteIdea(id).subscribe();
  }
}
