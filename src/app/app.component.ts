import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { CustomService } from './custom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private customService: CustomService
  ) {
    localStorage.clear();
  }

  ngOnInit() {
    this.getAuthNonce();
  }

  getAuthNonce() {
    let strAuthNonce: string;
    this.apiService.authNonceResponse()
    .subscribe(
      (response: any) => {
        strAuthNonce = this.customService.getObjHeaders(response, 'auth-nonce');
        localStorage.setItem('auth-nonce', strAuthNonce);
        strAuthNonce = this.customService.calcAuthNonce(Number(strAuthNonce)).toString();
        localStorage.setItem('auth-nonce-response', strAuthNonce.toString());
        console.log('auth-nonce: ', localStorage.getItem('auth-nonce'));
        console.log('auth-nonce-response: ', localStorage.getItem('auth-nonce-response'));
      }
    );
  }
}
