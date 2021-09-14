import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainRandomDeckComponent } from './randomDeck/main-random-deck/main-random-deck.component';
import { PlayingCardComponent } from './randomDeck/playing-card/playing-card.component';
import { PlayingCardTableComponent } from './randomDeck/playing-card-table/playing-card-table.component';

@NgModule({
  declarations: [
    AppComponent,
	MainRandomDeckComponent,
	PlayingCardComponent,
    PlayingCardTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
