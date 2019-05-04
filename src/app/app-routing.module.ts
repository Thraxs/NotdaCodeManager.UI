import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeValidatorComponent } from './code-validator/code-validator.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
