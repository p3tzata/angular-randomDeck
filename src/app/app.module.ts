import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainRandomDeckComponent } from './randomDeck/component/main-random-deck/main-random-deck.component';
import { PlayingCardTableComponent } from './randomDeck/component/playing-card-table/playing-card-table.component';
import { PlayingCardComponent } from './randomDeck/component/playing-card/playing-card.component';

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
