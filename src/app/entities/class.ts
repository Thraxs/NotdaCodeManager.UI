import { ClassType } from './classType';

export class Class {
    type: ClassType;
    displayName: string;

    constructor(classType: string) {
        this.type = +classType;
        switch (this.type) {
            case ClassType.Rifleman: 
                this.displayName = "Rifleman"; 
                break;
            case ClassType.Flamethrower: 
                this.displayName = "Flamethrower"; 
                break;
            case ClassType.NavyCorpsman: 
                this.displayName = "Navy Corpsman"; 
                break;
            case ClassType.MachineGunner: 
                this.displayName = "Machine Gunner"; 
                break;
            case ClassType.CombatEngineer: 
                this.displayName = "Combat Engineer"; 
                break;
            case ClassType.DesignatedMarksman: 
                this.displayName = "Designated Marksman"; 
                break;
            case ClassType.Predator: 
                this.displayName = "MQ-3 Predator"; 
                break;
            case ClassType.ForceRecon: 
                this.displayName = "Force Recon"; 
                break;
            case ClassType.InfantryUnitLeader: 
                this.displayName = "Infantry Unit Leader"; 
                break;
            case ClassType.ForwardObserver: 
                this.displayName = "Forward Observer"; 
                break;
            case ClassType.Assaultman: 
                this.displayName = "Assaultman"; 
                break;
            case ClassType.DeltaOperator: 
                this.displayName = "Delta Operator"; 
                break;
        }
    }
}