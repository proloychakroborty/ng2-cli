import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { I18nComponent } from './components/i18n/i18n.component';
import { ListCenterComponent } from './list-center/list-center.component';

@NgModule({
  declarations: [
    AppComponent,
    I18nComponent,
    ListCenterComponent
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
