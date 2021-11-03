import { PlayCardCount } from "./enum/play-card-count";
import { PlayCardPaint } from "./enum/play-card-paint";

export class  PlayCard {

    constructor (public id: number,public count: PlayCardCount, public paint:PlayCardPaint,public imgUrl: string) {

    }

}