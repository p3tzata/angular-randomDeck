import { Injectable } from '@angular/core';
import { PlayCardCount } from '../model/enum/play-card-count';
import { PlayCardPaint } from '../model/enum/play-card-paint';
import { PlayCard } from '../model/playCard.model';
import { PlayCardGameStore } from '../model/PlayCardGameStore';
import { PlayCardGameStoreCfg } from '../model/PlayCardGameStoreCfg';
import { PlayCardHazardStoreCfg } from '../model/PlayCardHazardStoreCfg';
import { PlayCardRangeRandomCfg } from '../model/PlayCardRangeRandomCfg.model';
import { PlayCardStoreRandomCfg } from '../model/PlayCardStoreRandomCfg.model';


@Injectable({
  providedIn: 'root'
})
export class PlayingCardServiceService {
  baseUrl:string = "assets/DeckImg/"
  playCardGameStoreCfg: PlayCardGameStoreCfg = new PlayCardGameStoreCfg();
  constructor() {
    this.seedConfiguration();
   // console.log(this.getRandomIntInclusive(0,3));
   // console.log(this.getRandomIntInclusive(0,1));

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
   // debugger;
    return playCardDeck_32;

   }    


   getRandomInt(max:number): number {
    return Math.floor(Math.random() * max);
  }

 

   getRandomIntInclusive(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }



  seedConfiguration():void {
   let playCardStoreRandomCfgTrump1 = new PlayCardStoreRandomCfg();
   playCardStoreRandomCfgTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.J,0,20));
   playCardStoreRandomCfgTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.N,15,31));


   let playCardStoreRandomCfgTrump2 = new PlayCardStoreRandomCfg();
   playCardStoreRandomCfgTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.J,0,10));
   playCardStoreRandomCfgTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.N,20,31));


   let playCardHazardStoreTrump= new PlayCardHazardStoreCfg();
   playCardHazardStoreTrump.add(55,playCardStoreRandomCfgTrump1);
   playCardHazardStoreTrump.add(100,playCardStoreRandomCfgTrump2);
 
   
   let playCardStoreRandomCfgNoTrump1 = new PlayCardStoreRandomCfg();
   playCardStoreRandomCfgNoTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.J,0,20));
   playCardStoreRandomCfgNoTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.N,15,31));


   let playCardStoreRandomCfgNoTrump2 = new PlayCardStoreRandomCfg();
   playCardStoreRandomCfgNoTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.J,0,10));
   playCardStoreRandomCfgNoTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.N,20,31));


   let playCardHazardStoreNoTrump= new PlayCardHazardStoreCfg();
   playCardHazardStoreNoTrump.add(55,playCardStoreRandomCfgNoTrump1);
   playCardHazardStoreNoTrump.add(100,playCardStoreRandomCfgNoTrump2);

   this.playCardGameStoreCfg.addTrump(playCardHazardStoreTrump);
   this.playCardGameStoreCfg.addNoTrump(playCardHazardStoreNoTrump);
   

  }


   generateConfiguration():PlayCardGameStore {

    let hazardPointer:number=this.getRandomIntInclusive(0, 100);

    let playCardRangeRandomCfgTrump: PlayCardStoreRandomCfg=this.playCardGameStoreCfg.getTrump(hazardPointer);
    let playCardRangeRandomCfgNoTrump: PlayCardStoreRandomCfg=this.playCardGameStoreCfg.getNoTrump(hazardPointer);
    let playCardGameStore=new PlayCardGameStore();

    


    playCardGameStore.addTrump(playCardRangeRandomCfgTrump);
    playCardGameStore.addNoTrump(playCardRangeRandomCfgNoTrump);


    return playCardGameStore;
   }







}
