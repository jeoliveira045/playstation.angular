import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { GamesComponent } from './components/games/games.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { GameCardComponent } from './components/games/game-card/game-card.component';
import { NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { EventsComponent } from './components/events/events.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HighlightComponent,
    GamesComponent,
    PageHomeComponent,
    GameCardComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
