import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { LOG_LOGGER_PROVIDERS } from 'angular2-log4ts/src/app/core';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap'; //Ng2BootstrapModule to import all

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListCenterComponent } from './list-center/list-center.component';
import { I18nComponent } from './i18n/i18n.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MyMapComponent } from './my-map/my-map.component';

@NgModule({
  declarations: [
    AppComponent,
    I18nComponent,
    ListCenterComponent,
    MyMapComponent
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
    PaginationModule
  ],
  providers: [LOG_LOGGER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
