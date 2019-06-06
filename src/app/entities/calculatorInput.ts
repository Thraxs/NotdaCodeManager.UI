import { ClassType } from './classType';

export class CalculatorInput {
    startingPlayers: number;
    playerClass: ClassType;
    playerKills: number;
    playerHits: number;
    totalAilmentsInitial: number;
    completedMissions: number;
    gameCompleted: boolean;

    effectiveKill: number;
    killHitRatio: number;
    totalAilments: number;

    constructor(players: number, pClass: ClassType, kills: number, hits: number, ailments: number, missions: number, completed: boolean) {
        this.startingPlayers = players;
        this.playerClass = pClass;
        this.playerKills = kills;
        this.playerHits = hits;
        this.totalAilmentsInitial = ailments;
        this.completedMissions = missions;
        this.gameCompleted = completed;

        this.effectiveKill = (this.playerKills * this.getKillFactor()) * (1 + (this.completedMissions / 17));
        this.killHitRatio = this.effectiveKill / (this.playerHits + 0.1);
        if (this.gameCompleted) {
            this.killHitRatio = this.killHitRatio * 1.2;
            this.effectiveKill = this.effectiveKill * 1.1;
            this.totalAilments = this.totalAilments * 0.95;
        }
    }

    getKillFactor() : number {
        let kf = 0;
        switch (+this.playerClass) {
            case ClassType.Rifleman: kf = 1.0; break;
            case ClassType.Flamethrower:
                if (this.startingPlayers > 5)
                    kf = 1.6;
                else 
                    kf = 1.2;
                break;
            case ClassType.NavyCorpsman:
                if (this.startingPlayers > 6)
                    kf = 1.85;
                else 
                    kf = 1.7;
                break;
            case ClassType.MachineGunner: kf = 0.7; break;
            case ClassType.CombatEngineer:
                if (this.startingPlayers > 5)
                    kf = 1.8;
                else 
                    kf = 1.5;
                break;
            case ClassType.DesignatedMarksman: kf = 0.8; break;
            case ClassType.Predator: kf = 0.7; break;
            case ClassType.ForceRecon: kf = 1.3; break;
            case ClassType.InfantryUnitLeader: kf = 0.9; break;
            case ClassType.ForwardObserver: kf = 1.3; break;
            case ClassType.Assaultman: kf = 1.5; break;
            case ClassType.DeltaOperator: kf = 0.8; break;
        }
        if (this.startingPlayers < 3){
            kf = (kf + 1) / 2;
        }
        return kf;
    }
}