import { MissionType } from './missionType';

export class Mission {
    type: MissionType;
    completed: boolean;
    displayName: string;

    constructor(missionType: string) {
        this.type = +missionType;
        switch (this.type) {
            case MissionType.Spores: 
                this.displayName = "Spores killed"; 
                break;
            case MissionType.Caves:
                this.displayName = "Caves sealed";
                break;
            case MissionType.CiviliansRescued:
                this.displayName = "9 or more Civilians rescued in convoy"
                break;
            case MissionType.SentriesPlaced:
                this.displayName = "Sentries placed";
                break;
            case MissionType.PowerGeneratorRestored:
                this.displayName = "Power Generator restored";
                break;
        }
    }
}