import { Component, OnInit, Input } from '@angular/core';
import { ClassType } from '../entities/classType';
import { Class } from '../entities/class';
import { MissionType } from '../entities/missionType';
import { Mission } from '../entities/mission';
import { KeyWaveType } from '../entities/KeyWaveType';
import { KeyWave } from '../entities/keyWave';
import { CalculatorInput } from '../entities/calculatorInput';
import { MedalType } from '../entities/medalType';
import { MedalResult } from '../entities/medalResult';
import { Medal } from '../entities/medal';

@Component({
  selector: 'app-medal-calculator',
  templateUrl: './medal-calculator.component.html',
  styleUrls: ['./medal-calculator.component.scss']
})
export class MedalCalculatorComponent implements OnInit {
  //Enum values
  classList: Class[];
  missionList: Mission[];
  waveList: KeyWave[];

  //User input
  @Input() startingPlayers: number;
  @Input() playerClass: ClassType;
  @Input() playerKills: number;
  @Input() playerHits: number;
  @Input() totalAilments: number;
  @Input() completedMissions: MissionType[] = [];
  @Input() highestWave: KeyWaveType;
  @Input() gameCompleted: boolean;

  //View status
  resultsDisplayed: boolean;
  results: MedalResult[];

  constructor() { 
    this.classList = [];
    for (let classType in ClassType) {
      if (!isNaN(Number(classType))){
        this.classList.push(new Class(classType as string));
      }
    }

    this.missionList = [];
    for (let missionType in MissionType) {
      if (!isNaN(Number(missionType))) {
        this.missionList.push(new Mission(missionType as string));
      }
    }

    this.waveList = [];
    for (let wave in KeyWaveType) {
      if (!isNaN(Number(wave))) {
        this.waveList.push(new KeyWave(wave as string));
      }
    }

    this.resultsDisplayed = false;
  }

  ngOnInit() {}

  calculatePoints(): void {
    //TODO validation
    let input = new CalculatorInput(this.startingPlayers, this.playerClass, this.playerKills, this.playerHits, 
      this.totalAilments, this.completedMissions.length, this.gameCompleted, this.highestWave);

    this.results = []
    for (let mType in MedalType) {
      if (!isNaN(Number(mType)) && mType != "11") {
        let medalResult = new MedalResult(mType as string);
        medalResult.calculatePoint(input);
        this.results.push(medalResult);
      }
    }
    this.resultsDisplayed = true;
  }
}