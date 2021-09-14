import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { PlayCard } from '../model/playCard.model';
import { PlayingCardServiceService } from '../playing-card-service.service';

@Component({
  selector: 'app-playing-card-table',
  templateUrl: './playing-card-table.component.html',
  styleUrls: ['./playing-card-table.component.css']
})
export class PlayingCardTableComponent implements OnInit {

  deck: PlayCard[];
  displayCard: PlayCard[];
  pointerOfDeck:number=0;
  countOfShownCard:number=3;
  numberBtnAppend:string="";
  pickNextCardsIsDisabled: boolean=false;
  appendCounterToPickBtn: string=""
  counterSec:number=0;
  counterSecId:any="";


  constructor(private playingCardServiceService: PlayingCardServiceService ) { 
    this.displayCard=[];
    this.reloadNumberBtnAppend();
    this.deck=this.playingCardServiceService.getDeck_32();
    this.generate();

    // debugger;
  }

  reloadNumberBtnAppend():void {
    this.numberBtnAppend="("+this.countOfShownCard+")";
  }

  generate(): void {
    this.stopSecCounber();
    this.counterSec=0;
    this.randomDeck()
    this.pointerOfDeck=0;
    this.displayCard=[];
    this.pickNextCardsIsDisabled=false;
    this.appendCounterToPickBtn="("+this.pointerOfDeck + " of " + this.deck.length +")";
    
  }



  randomDeck(): void {

    for (let i=0;i<this.deck.length;i++) {

      let randomInt=this.playingCardServiceService.getRandomInt(this.deck.length-1);
      let currentPlayCard=this.deck[i];
      this.deck[i]=this.deck[randomInt];
      this.deck[randomInt]=currentPlayCard;

    }



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
