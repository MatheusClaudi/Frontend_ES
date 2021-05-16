import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { LateralBarComponent } from './lateral-bar/lateral-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { CardListingComponent } from './card-listing/card-listing.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    TopbarComponent,
    LateralBarComponent,
    PaginationComponent,
    DatePickerComponent,
    CardComponent,
    CardListingComponent
   
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  exports: [
    TopbarComponent,
    LateralBarComponent,
    PaginationComponent,
    DatePickerComponent,
    CardComponent,
    CardListingComponent
    
  ],
})
export class SharedModule { }
