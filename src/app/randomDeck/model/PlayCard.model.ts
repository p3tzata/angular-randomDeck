import { PlayCardCount } from "./enum/play-card-count";
import { PlayCardSuits } from "./enum/play-card-suits";


export class  PlayCard {

    constructor (public id: number,public count: PlayCardCount, public Suits:PlayCardSuits,public imgUrl: string) {

    }

}