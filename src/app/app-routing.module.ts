import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCenterComponent } from './list-center/list-center.component';
import { MyMapComponent } from './my-map/my-map.component';
import { PsiNewsComponent } from './psi-news/psi-news.component';
import { PsiBookstoreComponent } from './psi-bookstore/psi-bookstore.component';
import { AboutPsiComponent } from './about-psi/about-psi.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleTestComponent } from './schedule-test/schedule-test.component';

const routes: Routes = [
  { path: 'list-center', component: ListCenterComponent },
  { path: 'my-map', component: MyMapComponent },
  { path: 'psi-news', component: PsiNewsComponent },
  { path: 'psi-bookstore', component: PsiBookstoreComponent },
  { path: 'about-psi', component: AboutPsiComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'app-schedule-test', component: ScheduleTestComponent },
  {
    path: '',
    redirectTo: '/app-schedule-test',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/app-schedule-test',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
