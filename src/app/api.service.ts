import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:7271/api/Users';
  users = [
    {id: 1, name: 'User1'},
    {id: 2, name: 'User2'},
    {id: 3, name: 'User3'}
  ]

  constructor(private http: HttpClient) {}

  // GET request. Retreives the full list of Users.
  getUsers() {
    return this.http.get(this.apiUrl + '/AllUsers');
  }

  //Get request. Get a specific User by id:
  getUser(id: number) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  // POST request. Creates a new User. Saves to MongoDB.
  create(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Optional: Set headers
    return this.http.post(this.apiUrl + '/create', data, { headers });
  }

  // PUT request. Updates a specific User by id:
  update(id: number, data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Optional: Set headers
    return this.http.put(this.apiUrl + '/update/' + id, data, { headers });
  }
}
