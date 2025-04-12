import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data: any;

  title = "AngularWebAPI";
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Fetch data on initialization. Get's the entire list of User(s).
    this.apiService.get().subscribe(response => {
      this.data = response;
      console.log('GET User(s) on init: ', response);
    });
  }

      // Method to update data
      getUser(id: number) {
        this.apiService.getUser(id).subscribe(response => {
          console.log('GET User by ID: ', response);
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