import { Injectable } from '@angular/core';
import { PlayCard } from './model/playCard.model';

@Injectable({
  providedIn: 'root'
})
export class PlayingCardServiceService {
  baseUrl:string = "assets/DeckImg/"
  constructor() {
    

   }

   getDeck_32(): PlayCard[]{
    let playCardDeck_32: PlayCard[] =[];
    let count: string[] =['7','8','9','T','J','Q','K','A'];
    let paint: string[] = ['C','D','H','S']
    let id=0;
    for(let i=0;i<count.length;i++) {

      for(let j=0;j<paint.length;j++) {

        playCardDeck_32[id]=new PlayCard(id++,this.baseUrl+count[i]+paint[j]+".svg");

      }

    }

    return playCardDeck_32;
/*
    playCardDeck_32[1]=new PlayCard(1,"7C");
    playCardDeck_32[2]=new PlayCard(2,"7D");
    playCardDeck_32[3]=new PlayCard(3,"7H");
    playCardDeck_32[4]=new PlayCard(4,"7S");
*/
   }    


   getRandomInt(max:number): number {
    return Math.floor(Math.random() * max);
  }




}
