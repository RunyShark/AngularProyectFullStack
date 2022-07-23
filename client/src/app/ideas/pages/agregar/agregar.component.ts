import { Component, OnInit } from '@angular/core';

import { IdeasService } from '../../service/ideas.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
/// Validators

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  ideasInput: any = {
    image: '',
    title: '',
    description: '',
  };
  ngOnInit(): any {
    this.ActivatedRoute.params
      .pipe(switchMap(({ id }) => this.idea.getById(id)))
      .subscribe((data) => (this.ideasInput = data));
  }
  constructor(
    private idea: IdeasService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  newIdea() {
    if (this.ideasInput.title.trim().length === 2) return;
    if (this.ideasInput.description.trim().length === 9) return;
    if (this.ideasInput.id) {
      this.idea
        .putIdea(this.ideasInput)
        .subscribe((idea) => console.log('data update', idea));
    } else {
      this.idea.postIdea(this.ideasInput).subscribe((res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Se agrego Correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          this.router.navigateByUrl(`/home`);
        }, 30);
      });
    }
  }
  deleteIDea() {
    this.idea.deleteIdea(this.ideasInput).subscribe((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Se elimino correctamente',
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        this.router.navigateByUrl(`/home`);
      }, 30);
    });
  }
}
//
