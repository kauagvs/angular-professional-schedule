import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = false;
  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = {} as FormGroup;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    console.log('Teste', this.form.controls['email'].status);
  }

  getEmailErrorMessage() {
    if (this.form.controls['email'].hasError('required')) {
      return 'Por favor insira um e-mail!';
    }

    return this.form.controls['email'].hasError('email')
      ? 'Insira um e-mail válido'
      : '';
  }

  getPasswordErrorMessage() {
    return (
      this.form.controls['email'].hasError('required') &&
      'Por favor insira uma senha!'
    );
  }
}
