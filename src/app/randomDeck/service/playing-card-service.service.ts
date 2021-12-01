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
  

  constructor() {
    this.seedConfiguration_30112021();
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


   seedConfiguration_30112021():void {
    let playCardStoreRandomCfgTrump1 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.J,0,3));
    playCardStoreRandomCfgTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.N,16,31));
 
 
    let playCardStoreRandomCfgTrump2 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.J,4,7));
    playCardStoreRandomCfgTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.N,16,31));
 
    let playCardStoreRandomCfgTrump3 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgTrump3.add(new PlayCardRangeRandomCfg(PlayCardCount.J,8,11));
    playCardStoreRandomCfgTrump3.add(new PlayCardRangeRandomCfg(PlayCardCount.N,16,31));

    let playCardStoreRandomCfgTrump4 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgTrump4.add(new PlayCardRangeRandomCfg(PlayCardCount.J,12,15));
    playCardStoreRandomCfgTrump4.add(new PlayCardRangeRandomCfg(PlayCardCount.N,16,31));


    let playCardStoreRandomCfgTrump5 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgTrump5.add(new PlayCardRangeRandomCfg(PlayCardCount.J,16,19));
    playCardStoreRandomCfgTrump5.add(new PlayCardRangeRandomCfg(PlayCardCount.N,16,31));

    let playCardStoreRandomCfgTrump6 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgTrump6.add(new PlayCardRangeRandomCfg(PlayCardCount.J,20,23));
    playCardStoreRandomCfgTrump6.add(new PlayCardRangeRandomCfg(PlayCardCount.N,16,31));


    let playCardStoreRandomCfgTrump7 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgTrump7.add(new PlayCardRangeRandomCfg(PlayCardCount.J,24,27));
    playCardStoreRandomCfgTrump7.add(new PlayCardRangeRandomCfg(PlayCardCount.N,16,31));

    let playCardStoreRandomCfgTrump8 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgTrump8.add(new PlayCardRangeRandomCfg(PlayCardCount.J,28,31));
    playCardStoreRandomCfgTrump8.add(new PlayCardRangeRandomCfg(PlayCardCount.N,16,31));

 
    let playCardHazardStoreTrump= new PlayCardHazardStoreCfg();
    playCardHazardStoreTrump.add(12,playCardStoreRandomCfgTrump1);
    playCardHazardStoreTrump.add(24,playCardStoreRandomCfgTrump2);
    playCardHazardStoreTrump.add(36,playCardStoreRandomCfgTrump3);
    playCardHazardStoreTrump.add(48,playCardStoreRandomCfgTrump4);
    playCardHazardStoreTrump.add(60,playCardStoreRandomCfgTrump5);
    playCardHazardStoreTrump.add(72,playCardStoreRandomCfgTrump6);
    playCardHazardStoreTrump.add(84,playCardStoreRandomCfgTrump7);
    playCardHazardStoreTrump.add(100,playCardStoreRandomCfgTrump8);
    
    let playCardStoreRandomCfgNoTrump1 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgNoTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.A,0,3));
    playCardStoreRandomCfgNoTrump1.add(new PlayCardRangeRandomCfg(PlayCardCount.T,16,31));
 
 
    let playCardStoreRandomCfgNoTrump2 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgNoTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.A,4,7));
    playCardStoreRandomCfgNoTrump2.add(new PlayCardRangeRandomCfg(PlayCardCount.T,16,31));
 
    let playCardStoreRandomCfgNoTrump3 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgNoTrump3.add(new PlayCardRangeRandomCfg(PlayCardCount.A,8,11));
    playCardStoreRandomCfgNoTrump3.add(new PlayCardRangeRandomCfg(PlayCardCount.T,16,31));

    let playCardStoreRandomCfgNoTrump4 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgNoTrump4.add(new PlayCardRangeRandomCfg(PlayCardCount.A,12,15));
    playCardStoreRandomCfgNoTrump4.add(new PlayCardRangeRandomCfg(PlayCardCount.T,16,31));


    let playCardStoreRandomCfgNoTrump5 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgNoTrump5.add(new PlayCardRangeRandomCfg(PlayCardCount.A,16,19));
    playCardStoreRandomCfgNoTrump5.add(new PlayCardRangeRandomCfg(PlayCardCount.T,16,31));

    let playCardStoreRandomCfgNoTrump6 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgNoTrump6.add(new PlayCardRangeRandomCfg(PlayCardCount.A,20,23));
    playCardStoreRandomCfgNoTrump6.add(new PlayCardRangeRandomCfg(PlayCardCount.T,16,31));


    let playCardStoreRandomCfgNoTrump7 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgNoTrump7.add(new PlayCardRangeRandomCfg(PlayCardCount.A,24,27));
    playCardStoreRandomCfgNoTrump7.add(new PlayCardRangeRandomCfg(PlayCardCount.T,16,31));

    let playCardStoreRandomCfgNoTrump8 = new PlayCardStoreRandomCfg();
    playCardStoreRandomCfgNoTrump8.add(new PlayCardRangeRandomCfg(PlayCardCount.A,28,31));
    playCardStoreRandomCfgNoTrump8.add(new PlayCardRangeRandomCfg(PlayCardCount.T,16,31));
 
 
    let playCardHazardStoreNoTrump= new PlayCardHazardStoreCfg();
    playCardHazardStoreNoTrump.add(12,playCardStoreRandomCfgNoTrump1);
    playCardHazardStoreNoTrump.add(24,playCardStoreRandomCfgNoTrump2);
    playCardHazardStoreNoTrump.add(36,playCardStoreRandomCfgNoTrump3);
    playCardHazardStoreNoTrump.add(48,playCardStoreRandomCfgNoTrump4);
    playCardHazardStoreNoTrump.add(60,playCardStoreRandomCfgNoTrump5);
    playCardHazardStoreNoTrump.add(72,playCardStoreRandomCfgNoTrump6);
    playCardHazardStoreNoTrump.add(84,playCardStoreRandomCfgNoTrump7);
    playCardHazardStoreNoTrump.add(100,playCardStoreRandomCfgNoTrump8);
 
    this.playCardGameStoreCfg.addTrump(playCardHazardStoreTrump);
    this.playCardGameStoreCfg.addNoTrump(playCardHazardStoreNoTrump);
    
 
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

 

    let playCardRangeRandomCfg_Clubs: PlayCardStoreRandomCfg;
    let playCardRangeRandomCfg_Diamonds: PlayCardStoreRandomCfg;
    let playCardRangeRandomCfg_Heards: PlayCardStoreRandomCfg;
    let playCardRangeRandomCfg_Spades: PlayCardStoreRandomCfg;


    if (gameType==PlayCardGameType.AllTrump) {

     playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getTrump();
     playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getTrump();
     playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getTrump();
     playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getTrump();
    
     

    }  else if (gameType==PlayCardGameType.ClubsTrump)  {

      playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getTrump();
      playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getNoTrump();
      playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getNoTrump();
      playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getNoTrump();
    }  else if (gameType==PlayCardGameType.DiamondsTrump)  {

      playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getNoTrump();
     playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getTrump();
     playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getNoTrump();
     playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getNoTrump();

    }  else if (gameType==PlayCardGameType.HeartsTrump)  {
      playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getNoTrump();
      playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getNoTrump();
      playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getTrump();
      playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getNoTrump();

    }  else if (gameType==PlayCardGameType.SpadesTrump)  {
     playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getNoTrump();
     playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getNoTrump();
     playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getNoTrump();
     playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getTrump();

    } else   {

     playCardRangeRandomCfg_Clubs=this.playCardGameStoreCfg.getNoTrump();
     playCardRangeRandomCfg_Diamonds=this.playCardGameStoreCfg.getNoTrump();
     playCardRangeRandomCfg_Heards=this.playCardGameStoreCfg.getNoTrump();
     playCardRangeRandomCfg_Spades=this.playCardGameStoreCfg.getNoTrump();

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
