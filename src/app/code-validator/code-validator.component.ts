import { Component, OnInit, Input } from '@angular/core';
import { CodeService } from '../services/codeService';
import { PlayerData } from '../entities/playerData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-code-validator',
  templateUrl: './code-validator.component.html',
  styleUrls: ['./code-validator.component.scss']
})
export class CodeValidatorComponent implements OnInit {
  //User input
  @Input() name: string;
  @Input() code: string;

  //View status
  loaded: boolean;
  playerData: PlayerData;
  validCode: boolean;

  constructor(private codeService: CodeService, private route: ActivatedRoute) {
    this.loaded = false;
  }

  ngOnInit() {}

  validateCode(): void {
    if (this.name == null || this.code == null || this.name.length == 0 || this.code.length == 0){
      this.validCode = false;
      this.loaded = true;
      return;
    }
    this.codeService.validateCode(this.name, this.code)
      .subscribe(response => this.updateDisplay(response.validCode, response.playerData));
  }

  updateDisplay(valid: boolean, data: PlayerData): void {
    this.validCode = valid;
    this.playerData = new PlayerData(data);
    this.loaded = true;
  }
}