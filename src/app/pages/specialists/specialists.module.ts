import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpecialistsRoutingModule } from './specialists-routing.module';
import { SpecialistsComponent } from './specialists.component';
import { SpecialistDetailComponent } from './specialist-detail/specialist-detail.component';
import { SpecialistListComponent } from './specialist-list/specialist-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SpecialistsComponent,
    SpecialistListComponent,
    SpecialistDetailComponent,
  ],
  imports: [
    CommonModule,
    SpecialistsRoutingModule,
    MatIconModule,
    SharedModule,
    RouterModule,
  ],
})
export class SpecialistsModule {}
