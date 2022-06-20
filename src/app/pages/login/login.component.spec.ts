import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService, FormBuilder],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
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

  describe('login()', () => {
    it('should disabled submit button if the form is invalid', () => {
      component.form.setValue({ email: null, password: null });
      fixture.detectChanges();

      const buttonElement: HTMLButtonElement =
        fixture.nativeElement.querySelector('.form__submit-button');

      expect(buttonElement).toBeTruthy();
      expect(buttonElement.disabled).toBeTrue();
    });

    it('should call login() when button is clicked', () => {
      spyOn(component, 'login');

      component.form.setValue({ email: 'teste@email.com', password: '123456' });
      fixture.detectChanges();

      const buttonElement: HTMLButtonElement =
        fixture.nativeElement.querySelector('.form__submit-button');
      buttonElement.click();

      expect(component.login).toHaveBeenCalled();
    });

    it('should navigate to specialists when authenticated', () => {
      spyOn(router, 'navigateByUrl');
      spyOn(component['authService'], 'authenticate').and.returnValue(
        of('success')
      );

      const credentials = { email: 'teste@email.com', password: '123456' };
      component.form.setValue(credentials);
      component.login();
      fixture.detectChanges();

      expect(component['authService'].authenticate).toHaveBeenCalledWith(
        credentials
      );
      expect(router.navigateByUrl).toHaveBeenCalledWith('/specialists');
    });
  });
});
