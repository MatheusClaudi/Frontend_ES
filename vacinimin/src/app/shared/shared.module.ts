import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { LateralBarComponent } from './lateral-bar/lateral-bar.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { CardListingComponent } from './card-listing/card-listing.component';

@NgModule({
  declarations: [
    TopbarComponent,
    LateralBarComponent,
    CardComponent,
    CardListingComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    TopbarComponent,
    LateralBarComponent,
    CardComponent,
    CardListingComponent
  ]
})
export class SharedModule { }
