import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  public username: string;
  public password: string;
  public workstationName: string;

  constructor() {
    this.username = 'sysadmin';
    this.password = 'sysadmin';
    this.workstationName = 'scheduler_sbs1';
  }

  calcAuthNonce(authNonce: number = 0) {
    return ((Math.trunc(authNonce / 13) % 99999) * 17);
  }

  getObjHeaders(response: any, param: string = '') {
    response.body.headers.lazyInit();
    const objAuthNonce = response.headers.headers;
    return objAuthNonce.get(param);
  }
}
