import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = false;
  form: FormGroup;
  authStatus: string = '';
  isAuthenticated: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
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

  login(): void {
    let credentials = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    if (credentials.email && credentials.password) {
      this.authService.authenticate(credentials).subscribe((status) => {
        this.authStatus = status;
        switch (this.authStatus) {
          case 'success':
            this.router.navigateByUrl('/specialties');
            this.buildForm();
            break;
          case 'invalid':
            this.buildForm();
            break;
        }
      });
    }
  }
}
