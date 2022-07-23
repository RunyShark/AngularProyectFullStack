import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListComponent } from './pages/list/list.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { UserComponent } from './pages/user/user.component';
import { IdeaDetailComponent } from './pages/idea-detail/idea-detail.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'create',
        component: AgregarComponent,
      },
      {
        path: 'update/:id',
        component: AgregarComponent,
      },
      {
        path: 'search',
        component: BuscarComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'delete',
        component: EliminarComponent,
      },
      {
        path: 'details/:id',
        component: IdeaDetailComponent,
      },
      {
        path: 'reviw/:id',
        component: ReviewComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeasRouterModule {}
