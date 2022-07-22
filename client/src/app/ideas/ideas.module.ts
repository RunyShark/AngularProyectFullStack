import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { IdeaDetailComponent } from './pages/idea-detail/idea-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    IdeaDetailComponent,
    HomeComponent,
    ListComponent,
    EliminarComponent,
  ],
  imports: [CommonModule, MaterialModule],
})
export class IdeasModule {}
