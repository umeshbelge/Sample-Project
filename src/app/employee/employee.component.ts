import { Component, OnInit } from '@angular/core';
import { SharedApiService } from '../../shared-api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  posts: any;

  constructor(private sharedApiService: SharedApiService) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
    };

    this.sharedApiService
      .getApi('https://gorest.co.in/public/v2/users', {})
      .then((response) => {
        console.log(response);
        this.posts = response?.body;
      });
  }
}
