import { Component, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-workstation',
  templateUrl: './workstation.component.html',
  styleUrls: ['./workstation.component.css']
})
export class WorkstationComponent implements OnInit {

  private workstationName: string;
  public cols: string;
  public pageNo: string;
  public pageSize: string;

  constructor(
    private apiService: ApiService,
    private customService: CustomService,
  ) {
    this.workstationName = 'scheduler_sbs1';
    this.cols = '*';
    this.pageNo = '1';
    this.pageSize = '10';
  }

  ngOnInit() {
    this.getListCustomer();
  }

  getListCustomer() {
    this.apiService.getWorkStation(this.workstationName)
      .subscribe(
        (response) => {
          this.apiService.getCustomerByID(this.cols)
            .subscribe(
              (result) => {
                console.log(result);
              }
            );
        }, error => {
          alert('You do not have access');
        }
      );
  }
}
