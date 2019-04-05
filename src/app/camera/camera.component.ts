import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CustomService } from '../custom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  public username: string;
  public password: string;
  public error: string;

  constructor(
    private apiService: ApiService,
    private customService: CustomService,
    private router: Router,
  ) {}

  ngOnInit() {
  }
}
