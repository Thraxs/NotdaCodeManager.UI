import { KeyWaveType} from './KeyWaveType';

export class KeyWave {
    type: KeyWaveType;
    displayName: string;

    constructor(waveType: string) {
        this.type = +waveType;
        switch (this.type) {
            case KeyWaveType.None:
                this.displayName = "None";
                break;
            case KeyWaveType.Wave7:
                this.displayName = "Search Ravenholm / Dark Clouds"; 
                break;
            case KeyWaveType.Wave9:
                this.displayName = "USS Independence arrival / Dark Clouds - Minos";
                break;
            case KeyWaveType.Wave12:
                this.displayName = "Revelation CAS / Delta chaingun or ammo spawn / Nightstalker class As"
                break;
            case KeyWaveType.Wave15:
                this.displayName = "Fox transmission / Golf transmission / BHD refuel transmission";
                break;
        }
    }
}