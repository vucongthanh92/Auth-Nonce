import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor() { }

  calcAuthNonce(authNonce: number = 0) {
    return ((Math.trunc(authNonce / 13) % 99999) * 17);
  }

  getObjHeaders(response: any, param: string = '') {
    response.body.headers.lazyInit();
    const objAuthNonce = response.headers.headers;
    return objAuthNonce.get(param);
  }
}
