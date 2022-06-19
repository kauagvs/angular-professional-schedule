import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [HeaderComponent, CalendarComponent],
  imports: [CommonModule, MatIconModule, MatMenuModule, RouterModule],
  exports: [HeaderComponent, CalendarComponent],
})
export class SharedModule {}
