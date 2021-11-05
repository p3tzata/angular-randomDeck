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

    getTrump(hazardPointer:number): PlayCardStoreRandomCfg{
       return this.store['trump'].getRandom(hazardPointer);  
    }

    getNoTrump(hazardPointer:number): PlayCardStoreRandomCfg{
        return this.store['noTrump'].getRandom(hazardPointer);  
     }

}