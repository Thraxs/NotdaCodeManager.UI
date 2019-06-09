import { Medal } from './medal';
import { MedalType } from './medalType';
import { CalculatorInput } from './calculatorInput';
import { KeyWaveType } from './KeyWaveType';

export class MedalResult extends Medal {
    pointGained: boolean;
    chance: number; //Chance to win/lose a point

    constructor(type: string) {
        super({
            type: +type,
            granted: false,
            points: 0
        });
    }

    calculatePoint(input: CalculatorInput) : MedalResult {
        let result: MedalResult;
        switch (+this.type) {
            case MedalType.CorpsCommendation:
                if (input.startingPlayers >= 2 && ((input.effectiveKill >= 225 && input.killHitRatio > 7.0 ) || input.completedMissions > 3)) {
                    this.pointGained = true;
                    this.chance = 100;
                }
                else {
                    this.pointGained = false;
                    this.chance = 14.3;
                }
                break;
            case MedalType.BronzeStar:
                if (input.startingPlayers >= 2 && ((input.effectiveKill >= 300 && input.killHitRatio > 10.0) || input.completedMissions > 3)) {
                    this.pointGained = true;
                    this.chance = 100;
                }
                else {
                    this.pointGained = false;
                    this.chance = 16.7;
                }
                break;
            case MedalType.Heroism:
                if (input.startingPlayers >= 2 && input.effectiveKill >= 350 && input.killHitRatio > 14.0 && input.completedMissions > 0) {
                    this.pointGained = true;
                    this.chance = 100;
                }
                else {
                    this.pointGained = false;
                    this.chance = 20;
                }
                break;
            case MedalType.SilverStar:
                if (input.startingPlayers >= 2 && input.effectiveKill >= 400 && input.killHitRatio > 15.0 && input.completedMissions > 1) {
                    this.pointGained = true;
                    this.chance = 100;
                }
                else {
                    this.pointGained = false;
                    this.chance = 20;
                }
                break;
            case MedalType.NavyCross:
                if (input.startingPlayers >= 2 && input.effectiveKill >= 425 && input.killHitRatio > 16.0 && input.completedMissions > 2) {
                    this.pointGained = true;
                    this.chance = 100;
                }
                else {
                    this.pointGained = false;
                    this.chance = 20;
                }
                break;
            case MedalType.ArmedCommendation:
                if (input.startingPlayers >= 4 && ((input.highestWaveReached >= KeyWaveType.Wave7 && input.totalAilments < 20) || input.completedMissions > 3)) {
                    this.pointGained = true;
                    this.chance = 100;
                }
                else {
                    this.pointGained = false;
                    this.chance = 11.1;
                }
                break;
            case MedalType.Meritorious:
                if (input.startingPlayers >= 4 && ((input.highestWaveReached >= KeyWaveType.Wave9 && input.totalAilments < 15) || input.completedMissions > 3)) {
                    this.pointGained = true;
                    this.chance = 100;
                }
                else {
                    this.pointGained = false;
                    this.chance = 14.3;
                }
                break;
            case MedalType.SuperiorService:
                if (input.startingPlayers >= 4 && input.highestWaveReached >= KeyWaveType.Wave12 && input.totalAilments < 15 && input.completedMissions > 1) {
                    this.pointGained = true;
                    this.chance = 100;
                }
                else {
                    this.pointGained = false;
                    this.chance = 14.3;
                }
                break;
            case MedalType.Distinguished:
                if (input.startingPlayers >= 4 && input.highestWaveReached >= KeyWaveType.Wave15 && input.totalAilments < 15 && input.completedMissions > 2) {
                    this.pointGained = true;
                    this.chance = 100;
                }
                else {
                    this.pointGained = false;
                    this.chance = 14.3;
                }
                break;
            case MedalType.Honor:
                if (input.startingPlayers >= 4 && input.effectiveKill >= 450 && input.killHitRatio > 16.0 && input.highestWaveReached == KeyWaveType.Wave15 && input.completedMissions > 2) {
                    this.pointGained = true;
                    this.chance = 33.3;
                }
                else {
                    this.pointGained = false;
                    this.chance = 6.67;
                }
                break;
            case MedalType.DrillInstructor:
                if (input.highestWaveReached > KeyWaveType.Wave9) {
                    this.pointGained = true;
                    this.chance = 100;
                }
                else {
                    this.pointGained = false;
                    this.chance = 0;
                }
                break;
        }
        return result;
    }
}