import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.example.com/data';

  constructor(private http: HttpClient) {}

  // GET request. Retreives the full list of Users.
  get(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  //Get request. Get a specific User by id:
  getUser(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

  // POST request. Creates a new User. Saves to MongoDB.
  create(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Optional: Set headers
    return this.http.post<any>(this.apiUrl + '/create', data, { headers });
  }

  // PUT request. Updates a specific User by id:
  update(id: number, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Optional: Set headers
    return this.http.put<any>(this.apiUrl + '/' + id, data);
  }
}
