import { Component, OnInit, Input } from '@angular/core';
import { CodeService } from '../services/codeService';
import { PlayerData } from '../entities/playerData';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ValidationResponse } from '../model/validationResponse';

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

  private routeSubscription: Subscription;

  constructor(private codeService: CodeService, private route: ActivatedRoute) {
    this.loaded = false;
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      const name = params['bioId'];
      const code = params['saveCode'];
      
      if (name && code) {
        this.name = name;
        this.code = code;
        this.validateCode();
      }
   });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  validateCode(): void {
    if (this.name == null || this.code == null || this.name.length == 0 || this.code.length == 0){
      this.validCode = false;
      this.loaded = true;
      return;
    }
    this.codeService.validateCode(this.name, this.code).subscribe((response: ValidationResponse) => {
      var codeResult = response.result[0];
      this.updateDisplay(codeResult.validCode, codeResult.playerData);
    });
  }

  updateDisplay(valid: boolean, data: PlayerData): void {
    this.validCode = valid;
    this.playerData = new PlayerData(data);
    this.loaded = true;
  }
}