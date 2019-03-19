import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private sid: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.sid = params.sid;
      }
    );
  }

  ngOnInit() {
    this.getCustomer(this.sid);
  }

  getCustomer(sid: string = '') {
    this.apiService.getCustomerByID(sid)
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }

}
