import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { PlayCardGameType } from '../../model/enum/play-card-game-type';
import { PlayCardSuits } from '../../model/enum/play-card-suits';
import { PlayCard } from '../../model/playCard.model';
import { PlayCardGameStore } from '../../model/PlayCardGameStore';
import { PlayCardRangeRandomCfg } from '../../model/PlayCardRangeRandomCfg.model';
import { PlayCardStoreRandomCfg } from '../../model/PlayCardStoreRandomCfg.model';
import { PlayingCardServiceService } from '../../service/playing-card-service.service';
import { Util } from '../../util/util';


@Component({
  selector: 'app-playing-card-table',
  templateUrl: './playing-card-table.component.html',
  styleUrls: ['./playing-card-table.component.css']
})
export class PlayingCardTableComponent implements OnInit {
  occupyVector: boolean[];
  deck: PlayCard[];
  displayCard: PlayCard[];
  pointerOfDeck:number=0;
  countOfShownCard:number=3;
  numberBtnAppend:string="";
  pickNextCardsIsDisabled: boolean=false;
  appendCounterToPickBtn: string=""
  counterSec:number=0;
  counterSecId:any="";
  util:Util=new Util();


  constructor(private playingCardServiceService: PlayingCardServiceService ) { 
    this.displayCard=[];
    this.occupyVector=[];
   // this.deck=[];
    this.reloadNumberBtnAppend();
    this.deck=this.playingCardServiceService.getDeck_32();
    this.generate();

    // debugger;
  }

  reloadNumberBtnAppend():void {
    this.numberBtnAppend="("+this.countOfShownCard+")";
  }

  generate(): void {

    let playCardGame=this.playingCardServiceService.generateConfiguration(PlayCardGameType.AllTrump);

    this.stopSecCounber();
    this.counterSec=0;
    this.randomDeckByBlind();
    this.randomDeckByCfg(playCardGame);
    this.pointerOfDeck=0;
    this.displayCard=[];
    this.pickNextCardsIsDisabled=false;
    this.appendCounterToPickBtn="("+this.pointerOfDeck + " of " + this.deck.length +")";
    
  }

  randomDeckByCfg(playCardGame: PlayCardGameStore) {
    
    this.occupyVector=[];
    console.log(playCardGame);

    for (let i=0;i<this.deck.length;i++) {
      
      if (this.occupyVector[i]==true) {
        continue;
      }
      let randomInt:number=-1;
      let finalRandomInt=-1;
      

      let currentPlayCard:PlayCard=this.deck[i];
      let playCardStoreRandomCfg:PlayCardStoreRandomCfg =playCardGame.get(currentPlayCard.Suits);
      let playCardRangeRandomCfg:PlayCardRangeRandomCfg=playCardStoreRandomCfg.get(currentPlayCard.count);

      if (playCardRangeRandomCfg==null) {
        continue;
      }
      //debugger;
      
      let tryCount:number=10;  
      while(tryCount>0) {
        randomInt = this.util.getRandomIntInclusive(playCardRangeRandomCfg.minIndex,playCardRangeRandomCfg.maxIndex);

        if(this.occupyVector[randomInt]==null) {
          finalRandomInt=randomInt;
          break;
        } else {
        //debugger;
        tryCount--;
        }
      }

      
      if (finalRandomInt==-1) {
        continue;
      }



      let tempPlayCard: PlayCard = this.deck[i];
      let randomPlayCard: PlayCard =this.deck[finalRandomInt];
     
       this.deck[i]=randomPlayCard;
       this.deck[finalRandomInt]=tempPlayCard;
       this.occupyVector[finalRandomInt]=true;



      }

      //debugger;


  }



  randomDeckByBlind(): void {
    let i=0
    while (i<3) {
      for (let i=0;i<this.deck.length;i++) {
      //debugger;
      let randomInt=this.util.getRandomInt(this.deck.length-1);
      
      let tempPlayCard: PlayCard = this.deck[i];
      let randomPlayCard: PlayCard =this.deck[randomInt];
      

      this.deck[i]=randomPlayCard;
      this.deck[randomInt]=tempPlayCard;

      }
     // console.log("Random pass: "+i)
      i++;
    }
   // debugger;
  }


  startSecCounter(): void{
    this.counterSec=0;
    this.counterSecId=setInterval(
      ()=>{this.counterSec++}
      ,1000);
  }

  stopSecCounber(): void {
    clearInterval(this.counterSecId);
    this.counterSecId="";
  }


  pickNextCards(): void {
     // debugger;
     if (this.counterSecId=="") {
       this.startSecCounter();
     }
    

     this.displayCard=[];
     for(let i=0;i<this.countOfShownCard;i++) {
      if (this.pointerOfDeck>this.deck.length-1) {
        break;
      }

      this.displayCard[i]=this.deck[this.pointerOfDeck++];
      

     }

     if (this.pointerOfDeck>=this.deck.length) {
      this.pickNextCardsIsDisabled=true;
      this.stopSecCounber();
     }
     this.appendCounterToPickBtn="("+this.pointerOfDeck + " of " + this.deck.length +")";

  }


  ngOnInit(): void {
  
  
  }

  changeShownNumber() {
  
      if (this.countOfShownCard==4) {
        this.countOfShownCard=0;
      }

      this.countOfShownCard++;
      this.reloadNumberBtnAppend();
      this.generate();

  }


}
