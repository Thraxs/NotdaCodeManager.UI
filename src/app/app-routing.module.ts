import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeValidatorComponent } from './code-validator/code-validator.component';
import { MedalCalculatorComponent } from './medal-calculator/medal-calculator.component';

const routes: Routes = [
  { path: "", component: CodeValidatorComponent },
  { path: "code", component: CodeValidatorComponent },
  { path: "code/:bioId/:saveCode", component: CodeValidatorComponent },
  { path: "calc", component: MedalCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
