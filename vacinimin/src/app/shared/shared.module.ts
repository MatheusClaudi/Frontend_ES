import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { LateralBarComponent } from './lateral-bar/lateral-bar.component';



@NgModule({
  declarations: [
    TopbarComponent,
    LateralBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent,
    LateralBarComponent
  ],
})
export class SharedModule { }
