import { MedalType } from './medalType';
import { MedalResult } from './medalResult';
import { CalculatorInput } from './calculatorInput';

export class Medal {
    type: MedalType;
    granted: boolean;
    points: number;

    name: string;

    constructor(data: any) {
        this.type = data.type;
        this.granted = data.granted;
        this.points = data.points;
    }

    getName() : string {
        switch (+this.type) {
            case MedalType.CorpsCommendation: return "Marine Corps Commendation Medal";
            case MedalType.BronzeStar: return "Bronze Star";
            case MedalType.Heroism: return "Marine Corps Medal of Heroism";
            case MedalType.SilverStar: return "Silver Star";
            case MedalType.NavyCross: return "Navy Cross";
            case MedalType.ArmedCommendation: return "Armed Services Commendation Medal";
            case MedalType.Meritorious: return "Department of Defense Meritorious Service Medal";
            case MedalType.SuperiorService: return "Department of Defense Superior Service Medal";
            case MedalType.Distinguished: return "Department of Defense Distinguished Service Medal";
            case MedalType.Honor: return "Medal of Honor";
            case MedalType.DrillInstructor: return "Drill Instructor Ribbon";
            default: return "Error";
        }
    }

    calculatePoint(input: CalculatorInput) : MedalResult {
        let result: MedalResult;
        switch (+this.type) {
            case MedalType.CorpsCommendation:
                if ((input.effectiveKill >= 225 && input.killHitRatio > 7.0 ) || input.completedMissions > 3)
                    result = new MedalResult(true, 0);
                else 
                    result = new MedalResult(false, 14.3);
                break;
            case MedalType.BronzeStar:
                if ((input.effectiveKill >= 300 && input.killHitRatio > 10.0) || input.completedMissions > 3)
                    result = new MedalResult(true, 0);
                else
                    result = new MedalResult(false, 16.7);
                break;
            case MedalType.Heroism:
                if (input.effectiveKill >= 350 && input.killHitRatio > 14.0 && input.completedMissions > 0)
                    result = new MedalResult(true, 0);
                else
                    result = new MedalResult(false, 20);
                break;
            case MedalType.SilverStar:
                if (input.effectiveKill >= 400 && input.killHitRatio > 15.0 && input.completedMissions > 1)
                    result = new MedalResult(true, 0);
                else
                    result = new MedalResult(false, 20);
                break;
            case MedalType.NavyCross:
                if (input.effectiveKill >= 425 && input.killHitRatio > 16.0 && input.completedMissions > 2)
                    result = new MedalResult(true, 0);
                else
                    result = new MedalResult(false, 20);
                break;
            case MedalType.ArmedCommendation:
                
                break;
            case MedalType.Meritorious:

                break;
            case MedalType.SuperiorService:

                break;
            case MedalType.Distinguished:

                break;
            case MedalType.Honor:

                break;
            case MedalType.DrillInstructor:

                break;
        }
        return result;
    }
}