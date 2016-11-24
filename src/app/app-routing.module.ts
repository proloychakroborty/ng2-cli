import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCenterComponent } from './list-center/list-center.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list-center',
    pathMatch: 'full'
  },
  { path: 'list-center', component: ListCenterComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
