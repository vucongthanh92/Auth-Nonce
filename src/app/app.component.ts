import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { CustomService } from './services/custom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private username: string;
  private password: string;
  private authNonce: string;
  private authNonceReponse: string;
  private authSession: string;

  constructor(
    private apiService: ApiService,
    private customService: CustomService,
    private router: Router
  ) {
    this.username = customService.username;
    this.password = customService.password;
  }

  ngOnInit() {
    this.getAuthNonce();
  }

  getAuthNonce() {
    this.apiService.authNonceResponse()
      .subscribe(
        (response: any) => {
          this.authNonce = this.customService.getObjHeaders(response, 'auth-nonce');
          this.authNonceReponse = this.customService.calcAuthNonce(Number(this.authNonce)).toString();
          this.login(this.username, this.password, this.authNonce, this.authNonceReponse);
        }
      );
  }

  login(username = '', password = '', authNonce = '', authNonceReponse = '') {
    this.apiService.loginResponse({
      username,
      password,
      authNonce,
      authNonceReponse
    }).subscribe(
      (response: any) => {
        this.authSession = this.customService.getObjHeaders(response, 'auth-session')[0];
        localStorage.setItem('auth-session', this.authSession);
        this.getWorkStation();
      }, error => {
        console.log(error);
      }
    );
  }

  getWorkStation() {
    this.apiService.getWorkStation(this.customService.workstationName)
      .subscribe(
        (response) => {
          if (response) {
            console.log('Auth Session:', localStorage.getItem('auth-session'));
            this.router.navigate(['/']);
          }
        }, error => {
          console.log(error);
        }
      );
  }
}
