import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CustomService } from '../custom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public error: string;

  constructor(
    private apiService: ApiService,
    private customService: CustomService,
    private router: Router,
  ) {
    this.username = '';
    this.password = '';
    this.error = '';
  }

  ngOnInit() {
  }

  submitFormLogin() {
    if (!this.username || !this.password) {
      this.error = 'Username or Password is not empty!!!';
    } else {
      this.error = '';
      this.apiService.loginResponse(this.username, this.password)
        .subscribe(
          (response: any) => {
            alert('Logged in successfully');
            let strAuthSession: string;
            strAuthSession = this.customService.getObjHeaders(response, 'auth-session');
            localStorage.setItem('auth-session', strAuthSession);
            console.log('Auth Session:', localStorage.getItem('auth-session'));
            this.router.navigate(['/workstation']);
          }, error => {
            switch (error.status) {
              case 401:
                this.error = 'Username or Password is incorrect!';
                break;
              default:
                this.error = 'Login failed';
                console.log(this.error);
                break;
            }
          }
        );
    }
  }
}
