import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workstation',
  templateUrl: './workstation.component.html',
  styleUrls: ['./workstation.component.css']
})
export class WorkstationComponent implements OnInit {

  public customers: Array<any> = [];
  private workstationName: string;
  public cols: string;
  public pageNo: string;
  public pageSize: string;

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {
    this.workstationName = 'scheduler_sbs1';
    this.cols = '*';
    this.pageNo = '2';
    this.pageSize = '15';
  }

  ngOnInit() {
    this.getListCustomer();
  }

  getListCustomer() {
    this.apiService.getWorkStation(this.workstationName)
      .subscribe(
        (response) => {
          console.log('Opened Workstation ' + this.workstationName);
          this.apiService.getCustomer(this.cols, this.pageNo, this.pageSize)
            .subscribe(
              (result) => {
                console.log(result.body);
                this.customers = result.body;
              }
            );
        }, error => {
          console.log(error);
        }
      );
  }

  gotoCustomer(id: string = '') {
    if (id && id !== '') {
      this.router.navigate(['/customer/' + id],
        {
          queryParams: {
            sid: id
          }, skipLocationChange: true
        });
    }
  }
}
