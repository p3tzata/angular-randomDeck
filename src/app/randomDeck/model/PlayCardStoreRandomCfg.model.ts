import { PlayCardCount } from "./enum/play-card-count";
import { PlayCardRangeRandomCfg } from "./PlayCardRangeRandomCfg.model";
import { IHashStringKey } from "../interface/IHashStringKey";

export class PlayCardStoreRandomCfg {

    store: IHashStringKey<PlayCardRangeRandomCfg> = {};
    constructor() {
        
    }

    add(playCardRangeRandomCfg: PlayCardRangeRandomCfg):void {
        let playCardCount: string =playCardRangeRandomCfg.playCardCount;
        this.store[playCardCount]=playCardRangeRandomCfg;

    }

    get(playCardCount: PlayCardCount):PlayCardRangeRandomCfg {
        return this.store[playCardCount];
    }



}