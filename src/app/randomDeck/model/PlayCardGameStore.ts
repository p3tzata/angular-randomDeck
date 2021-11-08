import {IHashStringKey} from '../interface/IHashStringKey'
import { PlayCardSuits } from './enum/play-card-suits';
import { PlayCardRangeRandomCfg } from './PlayCardRangeRandomCfg.model';
import { PlayCardStoreRandomCfg } from './PlayCardStoreRandomCfg.model';

export class PlayCardGameStore {
    store: IHashStringKey<PlayCardStoreRandomCfg>={};
    
    constructor(){

    }

    add(playCardSuits: PlayCardSuits, playCardStoreCfg:PlayCardStoreRandomCfg) {
       
        this.store[playCardSuits]=playCardStoreCfg;

    }

    get(playCardSuits: PlayCardSuits): PlayCardStoreRandomCfg{
        return this.store[playCardSuits];
    }


 
}