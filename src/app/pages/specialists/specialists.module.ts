import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpecialistsRoutingModule } from './specialists-routing.module';
import { SpecialistsComponent } from './specialists.component';

@NgModule({
  declarations: [SpecialistsComponent],
  imports: [
    CommonModule,
    SpecialistsRoutingModule,
    MatIconModule,
    SharedModule,
  ],
})
export class SpecialistsModule {}
