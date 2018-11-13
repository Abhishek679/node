import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContact () {
    return this.http.get('http://localhost:3000/api/contacts');
  }
  addContact () {
    const newConatact = []; // for testing
    return this.http.post('http://localhost:3000/api/contact', newConatact);
  }
  deleteContact (id) {
    return this.http.delete('http://localhost:3000/api/contact/'+id);
  }
}
