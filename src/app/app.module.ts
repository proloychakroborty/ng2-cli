import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import { LOG_LOGGER_PROVIDERS } from 'angular2-log4ts/src/app/core';

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
    NgbModule.forRoot(),
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http] 
        }),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARGbyReYvoWgvHAOixsR8272yAYSxfWaE'
    })
  ],
  providers: [LOG_LOGGER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
