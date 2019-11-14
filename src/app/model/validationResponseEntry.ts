import { PlayerData } from '../entities/playerData';

export class ValidationResponseEntry {
    code: string;
    validCode: boolean;
    playerData: PlayerData;
}