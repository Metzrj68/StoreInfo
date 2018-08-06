import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";

class AuthStatus {
  public token: String
  public userName: String
  public password: String
  public readonly: boolean

  constructor() {
  }
}

@Injectable()


export class AuthHandlerService {
  status: Boolean
  authStatus: AuthStatus
  token: string


  constructor(private http: HttpClient) {
    this.authStatus = new AuthStatus()

  }

  login(name, password, cb) {
    this.http.post(
      'http://localhost:3000/api/auth/login',
      {name: name, password: password})
      .subscribe((data: AuthStatus) => {
        //var authStatus = data['token']
        if (data.token) {
          console.log(data)
          this.authStatus.token = data.token
          this.status = true
          this.authStatus.readonly = data.readonly
        }
        console.log('Read only: ' + this.authStatus.readonly)
        return cb(this.status)

      })


  }

}
