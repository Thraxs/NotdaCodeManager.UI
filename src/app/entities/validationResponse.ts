import { PlayerData } from './playerData';

export class ValidationResponse {
    validCode: boolean;
    playerData: PlayerData;

    constructor(data: any) {
        this.validCode = data.validCode;

        if (data.validCode){
            this.playerData = new PlayerData(data.playerData)
        }
    }
}