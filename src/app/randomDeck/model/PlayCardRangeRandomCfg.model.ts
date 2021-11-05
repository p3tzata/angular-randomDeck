import { PlayCardCount } from "./enum/play-card-count";


export class PlayCardRangeRandomCfg {
    
    constructor(public playCardCount: PlayCardCount, public minIndex:number, public maxIndex:number) {

    }
}