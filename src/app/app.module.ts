import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoccerLeaguesComponent } from './components/soccer-leagues/soccer-leagues.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RapidApiKeyInterceptor } from './services/app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SoccerLeaguesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[SoccerLeaguesComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RapidApiKeyInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
