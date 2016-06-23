import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { Guard, Router } from '@ngrx/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth-service';


@Injectable()
export class AuthGuard implements Guard {
  constructor(private authService: AuthService, private router: Router) {}

  protectRoute(): Observable<boolean> {
    return this.authService.auth$
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if (!authenticated) this.router.go('/');
      });
  }
}
