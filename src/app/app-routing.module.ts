import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCenterComponent } from './list-center/list-center.component';
import { MyMapComponent } from './my-map/my-map.component';
import { PsiNewsComponent } from './psi-news/psi-news.component';
import { PsiBookstoreComponent } from './psi-bookstore/psi-bookstore.component';
import { AboutPsiComponent } from './about-psi/about-psi.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'list-center', component: ListCenterComponent },
  { path: 'my-map', component: MyMapComponent },
  { path: 'psi-news', component: PsiNewsComponent },
  { path: 'psi-bookstore', component: PsiBookstoreComponent },
  { path: 'about-psi', component: AboutPsiComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: '',
    redirectTo: '/list-center',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/list-center',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
