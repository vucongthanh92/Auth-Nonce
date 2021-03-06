import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';
import { CustomService } from './custom.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private customService: CustomService
  ) { }

  authNonceResponse(): Observable<HttpResponse<any>> {
    const paramsRequest = new HttpParams();
    const headersRequest = new HttpHeaders();
    const bodyRequest: any = null;

    const requestOption = new HttpRequest<any>('GET', this.apiUrl + '/auth', bodyRequest, {
      headers: headersRequest,
      params: paramsRequest,
      responseType: 'json'
    });

    return this.httpClient.request<HttpResponse<any>>(requestOption).pipe(
      filter(responseAuthNonce => responseAuthNonce instanceof HttpResponse),
      map(response => {
        const result = response as HttpResponse<any>;
        let bodyResponse: any = null;
        bodyResponse = result as any;
        return result.clone({
          body: bodyResponse,
        }) as HttpResponse<any>;
      })
    );
  }

  loginResponse(username: string = '', password: string = ''): Observable<HttpResponse<any>> {
    const paramsRequest = new HttpParams()
      .set('usr', username)
      .set('pwd', password);
    const headersRequest = new HttpHeaders()
      .set('Auth-Nonce', localStorage.getItem('auth-nonce'))
      .set('Auth-Nonce-Response', localStorage.getItem('auth-nonce-response'));
    const bodyRequest: any = null;

    const requestOption = new HttpRequest<any>('GET', this.apiUrl + '/auth', bodyRequest, {
      headers: headersRequest,
      params: paramsRequest,
      responseType: 'json',
    });

    return this.httpClient.request<HttpResponse<any>>(requestOption).pipe(
      filter(responseAuthNonce => responseAuthNonce instanceof HttpResponse),
      map(response => {
        const result = response as HttpResponse<any>;
        let bodyResponse: any = null;
        bodyResponse = result as any;
        return result.clone({
          body: bodyResponse,
        }) as HttpResponse<any>;
      })
    );
  }

  getWorkStation(workstationName: string = '') {
    const paramsRequest = new HttpParams()
      .set('ws', workstationName);
    const headersRequest = new HttpHeaders()
      .set('auth-session', localStorage.getItem('auth-session'));
    const bodyRequest: any = null;

    const requestOption = new HttpRequest<any>('GET', this.apiUrl + '/sit', bodyRequest, {
      headers: headersRequest,
      params: paramsRequest,
      responseType: 'json'
    });

    return this.httpClient.request<HttpResponse<any>>(requestOption).pipe(
      filter(responseAuthNonce => responseAuthNonce instanceof HttpResponse),
      map(response => {
        const result = response as HttpResponse<any>;
        let bodyResponse: any = null;
        bodyResponse = result as any;
        return result.clone({
          body: bodyResponse,
        }) as HttpResponse<any>;
      })
    );
  }

  getCustomer(cols: string = '*', pageNo: string = '1', pageSize: string = '10'): Observable<HttpResponse<any>> {
    const paramsRequest = new HttpParams()
      .set('cols', cols)
      .set('page_no', pageNo)
      .set('page_size', pageSize);
    const headersRequest = new HttpHeaders()
      .set('auth-session', localStorage.getItem('auth-session'));
    const bodyRequest: any = null;

    const requestOption = new HttpRequest<any>('GET', this.apiUrl + '/customer', bodyRequest, {
      headers: headersRequest,
      params: paramsRequest,
      responseType: 'json',
    });

    return this.httpClient.request<HttpResponse<any>>(requestOption).pipe(
      filter(responseAuthNonce => responseAuthNonce instanceof HttpResponse),
      map(response => {
        const result = response as HttpResponse<any>;
        let bodyResponse: any = null;
        bodyResponse = result as any;
        return result.clone({
          body: bodyResponse.body,
        }) as HttpResponse<any>;
      })
    );
  }

  getCustomerByID(cols: string = '*'): Observable<HttpResponse<any>> {
    const paramsRequest = new HttpParams()
      .set('cols', 'first_name,last_name');
    const headersRequest = new HttpHeaders()
      .set('auth-session', localStorage.getItem('auth-session'));
    const bodyRequest: any = null;

    const requestOption = new HttpRequest<any>('GET', this.apiUrl + '/customer/518208586000106003', bodyRequest, {
      headers: headersRequest,
      params: paramsRequest,
      responseType: 'json',
    });

    return this.httpClient.request<HttpResponse<any>>(requestOption).pipe(
      filter(responseAuthNonce => responseAuthNonce instanceof HttpResponse),
      map(response => {
        const result = response as HttpResponse<any>;
        let bodyResponse: any = null;
        bodyResponse = result as any;
        return result.clone({
          body: bodyResponse.body,
        }) as HttpResponse<any>;
      })
    );
  }
}
