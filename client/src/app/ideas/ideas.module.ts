import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { IdeaDetailComponent } from './pages/idea-detail/idea-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { MaterialModule } from '../material/material.module';
import { IdeasRouterModule } from './ideas-router.module';
import { UserComponent } from './pages/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    IdeaDetailComponent,
    HomeComponent,
    ListComponent,
    EliminarComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    IdeasRouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
})
export class IdeasModule {}
