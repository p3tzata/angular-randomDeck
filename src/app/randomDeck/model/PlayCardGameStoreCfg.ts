import { IHashNumberKey } from '../interface/IHashNumberKey';
import {IHashStringKey} from '../interface/IHashStringKey'
import { PlayCardStoreRandomCfg } from './PlayCardStoreRandomCfg.model';
import { Util } from "../util/util";

export class PlayCardGameStoreCfg {

    util:Util=new Util();
    store: IHashStringKey<IHashNumberKey<PlayCardStoreRandomCfg>>={};
    
    reserve: IHashNumberKey<boolean> ={};
    maxRetry=99;
    cnt=0;
    constructor(){

    }

    clearCnt(){
        this.cnt=0;
        this.reserve={};
    }

    add(typeTrump:string,percentPointer: number, playCardStoreRandomCfg: PlayCardStoreRandomCfg):void {

        //ToDo: make validation to be sure 50,80,100
       //this.store['noTrump'][percentPointer]= playCardStoreRandomCfg;
       this.store[typeTrump] = {...this.store[typeTrump], [percentPointer]: playCardStoreRandomCfg };
    }

  

    


    getRandom(typeTrump:string):PlayCardStoreRandomCfg {
        
        let count=Object.keys(this.store[typeTrump]).length;
        let keys=Object.keys(this.store[typeTrump]);
        let result: PlayCardStoreRandomCfg= {} as PlayCardStoreRandomCfg;

        
        
        
        while (this.cnt<this.maxRetry) {

            const hazardPointer = this.util.getRandomIntInclusive(0, 100);
            for (var i = 0 ; i < keys.length; i++) 
            {
              
                    if(Number(keys[i])>=hazardPointer) {
                        if (!this.reserve[i]) {
                            this.reserve[i]=true;
                            return result=this.store[typeTrump][Number(keys[i])];
                        } else {
                            //console.log('debug reserve'+this.cnt);
                            break;
                        }

                    }
              
            
            
            }
            this.cnt++;
        
        }

        for (var i = 0 ; i < keys.length; i++) 
        {
                const hazardPointer = this.util.getRandomIntInclusive(0, 100);
                if(Number(keys[i])>=hazardPointer) {
                    this.reserve[i]=true;
                    return result=this.store[typeTrump][Number(keys[i])];
                }
         
        }




        return result;
    }



}