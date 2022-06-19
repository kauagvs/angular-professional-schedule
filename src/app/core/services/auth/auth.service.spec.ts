import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpController: HttpTestingController;
  let localStore: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
      ],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    localStore = {};

    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localStore ? localStore[key] : null
    );
    spyOn(window.localStorage, 'setItem').and.callFake(
      (key, value) => (localStore[key] = value + '')
    );
    spyOn(window.localStorage, 'clear').and.callFake(() => (localStore = {}));
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return true when user is authenticated', () => {
    let key = 'sessionAuthToken';
    let value = 'token';

    localStorage.setItem(key, value);

    expect(service.isLoggedIn()).toBeTrue();
  });

  it('should return false when user is not authenticated', () => {
    service.isLoggedIn();

    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should do logout', () => {
    spyOn(localStorage, 'removeItem');
    spyOn(service['router'], 'navigateByUrl');

    service.logout();
    expect(localStorage.clear).toHaveBeenCalled();
    expect(service['router'].navigateByUrl).toHaveBeenCalledWith('/login');
  });

  it('should return username', () => {
    let key = 'sessionUserName';
    let value = 'username';

    localStorage.setItem(key, JSON.stringify(value));

    let result = service.getUserName();

    expect(result).toEqual(value);
  });
});
