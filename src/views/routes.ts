import { provideRouter, Routes } from '@ngrx/router';
import { AuthGuard, UnauthGuard } from 'src/core/auth';
import { SignIn } from './sign-in';
import { Tasks } from './tasks';


const routes: Routes = [
  {path: '/', component: SignIn, guards: [UnauthGuard]},
  {path: '/tasks', component: Tasks, guards: [AuthGuard]}
];


export const ROUTER_PROVIDERS = provideRouter(routes);
