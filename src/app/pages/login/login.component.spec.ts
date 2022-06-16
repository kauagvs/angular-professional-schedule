import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [FormBuilder],
      imports: [RouterTestingModule, ReactiveFormsModule],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getEmailErrorMessage()', () => {
    it('should return required message', () => {
      component.form.controls['email'].setValue(null);
      fixture.detectChanges();

      const message = component.getEmailErrorMessage();

      expect(message).toEqual('Por favor insira um e-mail!');
    });

    it('should return invalid email message', () => {
      component.form.controls['email'].setValue('invalid_email');
      fixture.detectChanges();

      const message = component.getEmailErrorMessage();

      expect(message).toEqual('Insira um e-mail válido');
    });
  });

  describe('getPasswordErrorMessage()', () => {
    it('should return required message', () => {
      component.form.controls['password'].setValue(null);
      fixture.detectChanges();

      const message = component.getPasswordErrorMessage();

      expect(message).toEqual('Por favor insira uma senha!');
    });
  });
});
