import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OndeFicaComponent } from './layout/pages/oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './layout/pages/oferta/como-usar/como-usar.component';
import { OfertaComponent } from './layout/pages/oferta/oferta.component';
import { DiversaoComponent } from './layout/pages/diversao/diversao.component';
import { RestaurantesComponent } from './layout/pages/restaurantes/restaurantes.component';
import { NavComponent } from './layout/nav/nav.component';

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'oferta', component: NavComponent },
  {
    path: 'oferta/:id', component: OfertaComponent,
    children: [
      { path: '', component: ComoUsarComponent },
      { path: 'como-usar', component: ComoUsarComponent },
      { path: 'onde-fica', component: OndeFicaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
