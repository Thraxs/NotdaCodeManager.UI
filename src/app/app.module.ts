import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeValidatorComponent } from './code-validator/code-validator.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatFormFieldModule, MatInputModule, MatButtonModule, MatChipsModule, MatDividerModule, MatListModule, MatTabsModule, MatSelectModule, MatCheckbox, MatCheckboxModule, MatTableModule, MatTooltip, MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MedalCalculatorComponent } from './medal-calculator/medal-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeValidatorComponent,
    MedalCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatTooltipModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
