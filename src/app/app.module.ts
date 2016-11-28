import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { LOG_LOGGER_PROVIDERS } from 'angular2-log4ts/src/app/core';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap'; //Ng2BootstrapModule to import all
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppLoginComponent, AppLoginContent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListCenterComponent } from './list-center/list-center.component';
import { I18nComponent } from './i18n/i18n.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MyMapComponent } from './my-map/my-map.component';
import { PsiNewsComponent } from './psi-news/psi-news.component';
import { PsiBookstoreComponent } from './psi-bookstore/psi-bookstore.component';
import { AboutPsiComponent } from './about-psi/about-psi.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    I18nComponent,
    ListCenterComponent,
    MyMapComponent,
    AppLoginComponent, 
    AppLoginContent, PsiNewsComponent, PsiBookstoreComponent, AboutPsiComponent, ContactUsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http] 
        }),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARGbyReYvoWgvHAOixsR8272yAYSxfWaE'
    }),
    PaginationModule,
    NgbModule.forRoot(),
  ],
  entryComponents: [AppLoginContent],
  providers: [LOG_LOGGER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
