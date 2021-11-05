import {IHashStringKey} from '../interface/IHashStringKey'
import { PlayCardRangeRandomCfg } from './PlayCardRangeRandomCfg.model';
import { PlayCardStoreRandomCfg } from './PlayCardStoreRandomCfg.model';

export class PlayCardGameStore {
    store: IHashStringKey<PlayCardStoreRandomCfg>={};
    
    constructor(){

    }

    addTrump(playCardStore:PlayCardStoreRandomCfg) {
       
        this.store['trump']=playCardStore;

    }

    addNoTrump(playCardStore:PlayCardStoreRandomCfg) {
       
        this.store['noTrump']=playCardStore;

    }

}