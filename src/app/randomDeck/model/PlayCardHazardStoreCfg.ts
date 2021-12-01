import { PlayCardRangeRandomCfg } from "./PlayCardRangeRandomCfg.model";
import {IHashNumberKey} from '../interface/IHashNumberKey'
import { PlayCardStoreRandomCfg } from "./PlayCardStoreRandomCfg.model";
import { Util } from "../util/util";
export class PlayCardHazardStoreCfg {

    util:Util=new Util();
    curOccupy:number=0;
    lastAddedPercent=0;
    store: IHashNumberKey<PlayCardStoreRandomCfg>={};
    retryLeft:number=5;
    constructor(){
        
    }

    add(percentPointer: number, playCardStoreRandomCfg: PlayCardStoreRandomCfg):void {

        //ToDo: make validation to be sure 50,80,100
       this.store[percentPointer]= playCardStoreRandomCfg;



    }

    getRandom():PlayCardStoreRandomCfg {
        let count=Object.keys(this.store).length;
        let keys=Object.keys(this.store);
        let result: PlayCardStoreRandomCfg= {} as PlayCardStoreRandomCfg;

        const hazardPointer = this.util.getRandomIntInclusive(0, 100);


       //debugger;
        for (var i = 0 ; i < keys.length; i++) 
          {
            if(Number(keys[i])>=hazardPointer) {
                result=this.store[Number(keys[i])];
                break;
            }
          }
        
       // debugger;

        return result;
    }


}