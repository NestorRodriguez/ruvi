import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(userForm: { name: StringConstructor; password: StringConstructor; }) {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
