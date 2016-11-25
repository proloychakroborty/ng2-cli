import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCenterComponent } from './list-center/list-center.component';
import { MyMapComponent } from './my-map/my-map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list-center',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/list-center',
    pathMatch: 'full'
  },
  { path: 'list-center', component: ListCenterComponent  },
  { path: 'my-map', component: MyMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
