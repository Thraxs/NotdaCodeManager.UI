import { Component, OnInit } from '@angular/core';
import { ClassType } from '../entities/classType';
import { Class } from '../entities/class';
import { MissionType } from '../entities/missionType';
import { Mission } from '../entities/mission';

@Component({
  selector: 'app-medal-calculator',
  templateUrl: './medal-calculator.component.html',
  styleUrls: ['./medal-calculator.component.scss']
})
export class MedalCalculatorComponent implements OnInit {
  classList: Class[];
  missionList: Mission[];

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
  }

  ngOnInit() {
  }

}
