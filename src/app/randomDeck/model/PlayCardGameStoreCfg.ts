import {IHashStringKey} from '../interface/IHashStringKey'
import { PlayCardHazardStoreCfg } from './PlayCardHazardStoreCfg';
import { PlayCardStoreRandomCfg } from './PlayCardStoreRandomCfg.model';

export class PlayCardGameStoreCfg {
    store: IHashStringKey<PlayCardHazardStoreCfg>={};
    
    constructor(){

    }

    addTrump(playCardHazardStore:PlayCardHazardStoreCfg) {
       
        this.store['trump']=playCardHazardStore;

    }

    addNoTrump(playCardHazardStore:PlayCardHazardStoreCfg) {
       
        this.store['noTrump']=playCardHazardStore;

    }

    getTrump(): PlayCardStoreRandomCfg{
       return this.store['trump'].getRandom();  
    }

    getNoTrump(): PlayCardStoreRandomCfg{
        return this.store['noTrump'].getRandom();  
     }

}