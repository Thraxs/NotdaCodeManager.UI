export class MedalResult {
    pointGained: boolean;
    lossChance: number;

    constructor(pointGained: boolean, lossChance: number) {
        this.pointGained = pointGained;
        this.lossChance = lossChance;
    }
}