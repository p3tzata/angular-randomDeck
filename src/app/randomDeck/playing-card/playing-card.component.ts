import { Component, Input, OnInit } from '@angular/core';
import { PlayCard } from '../model/playCard.model';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css']
})
export class PlayingCardComponent implements OnInit {

  @Input()
  playCardInput!: PlayCard;

  constructor() { }

  ngOnInit(): void {
  }





}
