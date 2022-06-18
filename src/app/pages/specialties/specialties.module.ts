import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpecialtiesRoutingModule } from './specialties-routing.module';
import { SpecialtiesComponent } from './specialties.component';

@NgModule({
  declarations: [SpecialtiesComponent],
  imports: [CommonModule, SpecialtiesRoutingModule],
})
export class SpecialtiesModule {}
