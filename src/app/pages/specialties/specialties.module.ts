import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpecialtiesRoutingModule } from './specialties-routing.module';
import { SpecialtiesComponent } from './specialties.component';

@NgModule({
  declarations: [SpecialtiesComponent],
  imports: [CommonModule, SpecialtiesRoutingModule, SharedModule],
})
export class SpecialtiesModule {}
