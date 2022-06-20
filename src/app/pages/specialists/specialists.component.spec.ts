import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialistsService } from 'src/app/core/services/specialists/specialists.service';

import { SpecialistsComponent } from './specialists.component';

describe('SpecialistsComponent', () => {
  let component: SpecialistsComponent;
  let fixture: ComponentFixture<SpecialistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialistsComponent],
      providers: [SpecialistsService],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
