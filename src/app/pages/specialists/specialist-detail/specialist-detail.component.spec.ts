import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SpecialistsService } from 'src/app/core/services/specialists/specialists.service';

import { SpecialistDetailComponent } from './specialist-detail.component';

describe('SpecialistDetailComponent', () => {
  let component: SpecialistDetailComponent;
  let fixture: ComponentFixture<SpecialistDetailComponent>;
  const fakeActivatedRoute = {
    snapshot: {
      params: {
        get(): string {
          return '/';
        },
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialistDetailComponent],
      providers: [
        SpecialistsService,
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
      ],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
