import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyCEJnR5qZnjgj8XRBUgisS8isU_7Gzvswc',
    authDomain: 'ng2-todo-85493.firebaseapp.com',
    databaseURL: 'https://ng2-todo-85493.firebaseio.com',
    storageBucket: 'ng2-todo-85493.appspot.com'
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup,
    remember: 'default'
  })
];
