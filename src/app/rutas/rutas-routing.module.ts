import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app.component';
  import { from } from 'rxjs';


const routes: Routes = [{path: '' , component: AppComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
