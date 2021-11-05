import { PlayCardRangeRandomCfg } from "./PlayCardRangeRandomCfg.model";
import {IHashNumberKey} from '../interface/IHashNumberKey'
import { PlayCardStoreRandomCfg } from "./PlayCardStoreRandomCfg.model";
export class PlayCardHazardStoreCfg {

    curOccupy:number=0;
    lastAddedPercent=0;
    store: IHashNumberKey<PlayCardStoreRandomCfg>={};
    constructor(){
        
    }

    add(percentPointer: number, playCardStoreRandomCfg: PlayCardStoreRandomCfg):void {

        //ToDo: make validation to be sure 50,80,100
       this.store[percentPointer]= playCardStoreRandomCfg;



    }

    getRandom(hazardPointer:number):PlayCardStoreRandomCfg {
        let count=Object.keys(this.store).length;
        let keys=Object.keys(this.store);
        let result: PlayCardStoreRandomCfg= {} as PlayCardStoreRandomCfg;
        debugger;
        for (var i = 0 ; i < keys.length; i++) 
          {
            if(Number(keys[i])>=hazardPointer) {
                result=this.store[Number(keys[i])];
                break;
            }
          }
        
        debugger;

        return result;
    }


}