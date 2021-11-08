import { Injectable } from '@angular/core';
import { PlayCardCount } from '../model/enum/play-card-count';

import { PlayCardGameType } from '../model/enum/play-card-game-type';
import { PlayCardSuits } from '../model/enum/play-card-suits';

import { PlayCard } from '../model/playCard.model';
import { PlayCardGameStore } from '../model/PlayCardGameStore';
import { PlayCardGameStoreCfg } from '../model/PlayCardGameStoreCfg';
import { PlayCardHazardStoreCfg } from '../model/PlayCardHazardStoreCfg';
import { PlayCardRangeRandomCfg } from '../model/PlayCardRangeRandomCfg.model';
import { PlayCardStoreRandomCfg } from '../model/PlayCardStoreRandomCfg.model';
import { Util } from '../util/util';


@Injectable({
  providedIn: 'root'
})
export class PlayingCardServiceService {
  baseUrl:string = "assets/DeckImg/"
  playCardGameStoreCfg: PlayCardGameStoreCfg = new PlayCardGameStoreCfg();
  util:Util=new Util();

  constructor() {
    this.seedConfiguration();
   // console.log(this.getRandomIntInclusive(0,3));
   // console.log(this.getRandomIntInclusive(0,1));

   }

   getDeck_32(): PlayCard[]{
    let playCardDeck_32: PlayCard[] =[];
    let count: PlayCardCount[] =[PlayCardCount.S,PlayCardCount.E,PlayCardCount.N,
               PlayCardCount.T,PlayCardCount.J,PlayCardCount.Q,PlayCardCount.K,PlayCardCount.A];
    
    let Suits: PlayCardSuits[] = [PlayCardSuits.clubs,PlayCardSuits.diamonds,PlayCardSuits.hearts,PlayCardSuits.spades]
    let id=0;
    for(let i=0;i<count.length;i++) {

      for(let j=0;j<Suits.length;j++) {

        playCardDeck_32[id]=new PlayCard(id++,count[i],Suits[j], this.baseUrl+count[i]+Suits[j]+".svg");

      }

    }
   // debugger;
    return playCardDeck_32;

   }    


  



  seedConfiguration():void {
   let playCardStoreRandomCfgTrump1 = new PlayCardStoreRandomCfg();
   playCardStoreRandomCfgTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.J,0,15));
   playCardStoreRandomCfgTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.N,16,31));


   let playCardStoreRandomCfgTrump2 = new PlayCardStoreRandomCfg();
   playCardStoreRandomCfgTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.J,0,15));
   playCardStoreRandomCfgTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.N,16,31));


   let playCardHazardStoreTrump= new PlayCardHazardStoreCfg();
   playCardHazardStoreTrump.add(55,playCardStoreRandomCfgTrump1);
   playCardHazardStoreTrump.add(100,playCardStoreRandomCfgTrump2);
 
   
   let playCardStoreRandomCfgNoTrump1 = new PlayCardStoreRandomCfg();
   playCardStoreRandomCfgNoTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.A,0,15));
   playCardStoreRandomCfgNoTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.T,16,31));


   let playCardStoreRandomCfgNoTrump2 = new PlayCardStoreRandomCfg();
   playCardStoreRandomCfgNoTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.A,0,15));
   playCardStoreRandomCfgNoTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.T,16,31));


   let playCardHazardStoreNoTrump= new PlayCardHazardStoreCfg();
   playCardHazardStoreNoTrump.add(55,playCardStoreRandomCfgNoTrump1);
   playCardHazardStoreNoTrump.add(100,playCardStoreRandomCfgNoTrump2);

   this.playCardGameStoreCfg.addTrump(playCardHazardStoreTrump);
   this.playCardGameStoreCfg.addNoTrump(playCardHazardStoreNoTrump);
   

  }


   generateConfiguration(gameType:PlayCardGameType):PlayCardGameStore {

    let hazardPointer_Clubs:number=this.util.getRandomIntInclusive(0, 100);
    let hazardPointer_Diamonds:number=this.util.getRandomIntInclusive(0, 100);
    let hazardPointer_Heards:number=this.util.getRandomIntInclusive(0, 100);
    let hazardPointer_Spades:number=this.util.getRandomIntInclusive(0, 100);

    let playCardRangeRandomCfg_Clubs: PlayCardStoreRandomCfg;
    let playCardRangeRandomCfg_Diamonds: PlayCardStoreRandomCfg;
    let playCardRangeRandomCfg_Heards: PlayCardStoreRandomCfg;
    let playCardRangeRandomCfg_Spades: PlayCardStoreRandomCfg;


    if (gameType==PlayCardGameType.AllTrump) {

     playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getTrump(hazardPointer_Clubs);
     playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getTrump(hazardPointer_Diamonds);
     playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getTrump(hazardPointer_Heards);
     playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getTrump(hazardPointer_Spades);
    
     

    }  else if (gameType==PlayCardGameType.ClubsTrump)  {

      playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getTrump(hazardPointer_Clubs);
      playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Diamonds);
      playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Heards);
      playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Spades);
    }  else if (gameType==PlayCardGameType.DiamondsTrump)  {

      playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Clubs);
     playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getTrump(hazardPointer_Diamonds);
     playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Heards);
     playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Spades);

    }  else if (gameType==PlayCardGameType.HeartsTrump)  {
      playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Clubs);
      playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Diamonds);
      playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getTrump(hazardPointer_Heards);
      playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Spades);

    }  else if (gameType==PlayCardGameType.SpadesTrump)  {
     playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Clubs);
     playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Diamonds);
     playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Heards);
     playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getTrump(hazardPointer_Spades);

    } else   {

     playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Clubs);
     playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Diamonds);
     playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Heards);
     playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getNoTrump(hazardPointer_Spades);

    }


    let playCardGameStore=new PlayCardGameStore();

    playCardGameStore.add(PlayCardSuits.clubs,playCardRangeRandomCfg_Clubs);
    playCardGameStore.add(PlayCardSuits.diamonds,playCardRangeRandomCfg_Diamonds);
    playCardGameStore.add(PlayCardSuits.hearts,playCardRangeRandomCfg_Heards);
    playCardGameStore.add(PlayCardSuits.spades,playCardRangeRandomCfg_Spades);
    
    //debugger;

    return playCardGameStore;
   
  
  }







}
