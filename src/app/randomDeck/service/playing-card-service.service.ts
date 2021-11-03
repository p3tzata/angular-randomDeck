import { Injectable } from '@angular/core';
import { PlayCardCount } from '../model/enum/play-card-count';
import { PlayCardPaint } from '../model/enum/play-card-paint';
import { PlayCard } from '../model/playCard.model';


@Injectable({
  providedIn: 'root'
})
export class PlayingCardServiceService {
  baseUrl:string = "assets/DeckImg/"
  constructor() {
    

   }

   getDeck_32(): PlayCard[]{
    let playCardDeck_32: PlayCard[] =[];
    let count: PlayCardCount[] =[PlayCardCount.S,PlayCardCount.E,PlayCardCount.N,
               PlayCardCount.T,PlayCardCount.J,PlayCardCount.Q,PlayCardCount.K,PlayCardCount.A];
    
    let paint: PlayCardPaint[] = [PlayCardPaint.clubs,PlayCardPaint.diamonds,PlayCardPaint.hearts,PlayCardPaint.spades]
    let id=0;
    for(let i=0;i<count.length;i++) {

      for(let j=0;j<paint.length;j++) {

        playCardDeck_32[id]=new PlayCard(id++,count[i],paint[j], this.baseUrl+count[i]+paint[j]+".svg");

      }

    }
    debugger;
    return playCardDeck_32;

   }    


   getRandomInt(max:number): number {
    return Math.floor(Math.random() * max);
  }




}
