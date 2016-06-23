import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { Guard, Router, TraversalCandidate } from '@ngrx/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth-service';


@Injectable()
export class UnauthGuard implements Guard {
  constructor(private authService: AuthService, private router: Router) {}

  protectRoute(candidate: TraversalCandidate): Observable<boolean> {
    return this.authService.auth$
      .take(1)
      .map(authState => !authState)
      .do(unauthenticated => {
        if (!unauthenticated && candidate.isTerminal) {
          this.router.go('/tasks');
        }
      });
  }
}
