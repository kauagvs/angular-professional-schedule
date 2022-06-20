import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialistsService } from 'src/app/core/services/specialists/specialists.service';

import { SpecialistListComponent } from './specialist-list.component';

describe('SpecialistListComponent', () => {
  let component: SpecialistListComponent;
  let fixture: ComponentFixture<SpecialistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialistListComponent],
      providers: [SpecialistsService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
