import { DiversaoComponent } from './layout/diversao/diversao.component';
import { RestaurantesComponent } from './layout/restaurantes/restaurantes.component';
import { NavComponent } from './layout/nav/nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: NavComponent},
  { path: 'restaurantes', component: RestaurantesComponent},
  { path: 'diversao', component: DiversaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
