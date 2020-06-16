import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { AppRoutingModule , PageRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'; 
import { TokenService } from './services/token_service/token.service';
import { PendingComponent } from './components/pending/pending.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component'
@NgModule({
  declarations: [
    AppComponent,
    PendingComponent,
    PageNotFoundComponent,
    PendingComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
