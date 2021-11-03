import { PlayCard } from "./playCard.model";

export class PlayCardRangeRandomCfg {
    
    constructor(public playCard: PlayCard, public min:number, public max:number) {

    }
}