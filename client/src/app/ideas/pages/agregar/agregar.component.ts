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
      this.idea.putIdea(this.ideasInput).subscribe((ok) => {
        if (ok.Error) {
          console.log(ok.msg);
          Swal.fire('Error', ok.msg, 'error');
          this.router.navigateByUrl(`/auth`);
          return;
        }
        Swal.fire('Edicion', 'Todo salio bien', 'success');
        setTimeout(() => {
          this.router.navigateByUrl(`/home`);
        }, 1000);
      });
    } else {
      this.idea.postIdea(this.ideasInput).subscribe((ok) => {
        if (ok.Error) {
          console.log(ok.msg);
          Swal.fire('Error', ok.msg, 'error');
          this.router.navigateByUrl(`/auth`);
          return;
        }
        Swal.fire('success', 'Se agrego correctamente', 'success');
        setTimeout(() => {
          this.router.navigateByUrl(`/home`);
        }, 1000);
      });
    }
  }
  deleteIDea() {
    this.idea.deleteIdea(this.ideasInput).subscribe((ok) => {
      if (ok.Error) {
        console.log(ok.msg);
        Swal.fire('Error', ok.msg, 'error');
        this.router.navigateByUrl(`/auth`);
        return;
      }
      Swal.fire('Eliminado', 'Se agrego elimino correctamente', 'success');
      setTimeout(() => {
        this.router.navigateByUrl(`/home`);
      }, 1000);
    });
  }
}
//
