import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { LOG_LOGGER_PROVIDERS } from 'angular2-log4ts/src/app/core';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppLoginComponent, AppLoginContent } from './login/login.component';
import { FormlyModule, FormlyBootstrapModule } from 'ng2-formly';

import { AppRoutingModule } from './app-routing.module';

import { ChatService } from './shared/services/chat.service';
import { WebSocketService } from './shared/services/websocket.service';
import { BookingService } from './shared/services/booking.service';

import { AppComponent } from './app.component';
import { ListCenterComponent } from './list-center/list-center.component';
import { I18nComponent } from './i18n/i18n.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MyMapComponent } from './my-map/my-map.component';
import { PsiNewsComponent } from './psi-news/psi-news.component';
import { PsiBookstoreComponent } from './psi-bookstore/psi-bookstore.component';
import { AboutPsiComponent } from './about-psi/about-psi.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateMessage } from './create-message/create-message.component';
import { ChatComponent } from './chat/chat.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleTestComponent } from './schedule-test/schedule-test.component';

@NgModule({
  declarations: [
    AppComponent,
    I18nComponent,
    ListCenterComponent,
    MyMapComponent,
    AppLoginComponent,
    AppLoginContent, PsiNewsComponent, PsiBookstoreComponent, AboutPsiComponent, ContactUsComponent,
    ChatComponent, CreateMessage, RegisterComponent, ScheduleTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    Ng2BootstrapModule,
    NgbModule.forRoot(),
     FormlyModule.forRoot(),
    FormlyBootstrapModule,
  ],
  entryComponents: [AppLoginContent],
  providers: [LOG_LOGGER_PROVIDERS, ChatService, WebSocketService, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
