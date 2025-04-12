import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  usersDataArray: any;
  userData: any;

  title = "AngularWebAPI";
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Fetch data on initialization. Get's the entire list of User(s).
    this.apiService.getUsers().subscribe(response => {
      //this.data = response;
      this.usersDataArray = response;
      console.log('GET User(s) on init: ', response);
    });

    this.apiService.getUser(1).subscribe(response => {
      //this.data = response;
      this.userData = response;
      console.log('GET User by ID: 1 on init: ', response);
    });
  }

  onButtonClick() {
    var newUser: any;
    newUser = {id: 20, name: 'You created a new User using POST!'};
    this.create(newUser);
    // Add your logic here
  }

  onUpdateButtonClick(id: any) {
    var newUser: any;
    newUser = {id: id, name: 'You updated a User using PUT!'};
    this.update(id, newUser);
  }

  onFindButtonClick(id: any) {
    this.usersDataArray = this.getUser(id);
    // Add your logic here
  }

      // Method to update data
      getUser(id: number) {
        this.apiService.getUser(id).subscribe(response => {
          console.log('GET User by ID: ', response);
          return response;
        });
      }

  // Method to post data
  create(newData: any) {
    this.apiService.create(newData).subscribe(response => {
      console.log('POST Create a new User:', response);
    });
  }

    // Method to update data
    update(id: number, newData: any) {
      this.apiService.update(id, newData).subscribe(response => {
        console.log('PUT Update an existing User, if found:', response);
      });
    }
}