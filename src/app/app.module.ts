import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Rutas
import { APP_ROUTING } from "app/app.routes";

//Servicios
import { SpotifyService } from "app/services/spotify.service";
import { ArtistaComponent } from './components/artista/artista.component';

//Pipes
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { DomseguroPipe } from "app/pipes/domseguro.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    DomseguroPipe,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
