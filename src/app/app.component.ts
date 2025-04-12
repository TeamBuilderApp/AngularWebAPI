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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Fetch data on initialization
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
  }

  // Method to post data
  submitData(newData: any) {
    this.apiService.postData(newData).subscribe(response => {
      console.log('Data submitted:', response);
    });
  }

    // Method to post data
    updateData(newData: any) {
      this.apiService.putData(newData).subscribe(response => {
        console.log('Data updated:', response);
      });
    }
}