import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:7271/User';
  userFoundById = [];

  constructor(private http: HttpClient) {}

  // GET request. Retreives the full list of Users.
  getUsers() {
    return this.http.get(this.apiUrl + '/Get');
  }

  //Get request. Get a specific User by id:
  getUser(id: number) {
    return this.http.get(this.apiUrl + '/Get/' + id);
  }

  // POST request. Creates a new User. Saves to MongoDB.
  create(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Optional: Set headers
    return this.http.post(this.apiUrl + '/create', data, { headers });
  }

  // PUT request. Updates a specific User by id:
  update(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Optional: Set headers
    return this.http.put(this.apiUrl + '/Update?id=' + data.id, data, {
      headers,
    });
  }
}
