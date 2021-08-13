import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoint } from '../shared/endpoints'
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root'})
export class UserService {
    constructor (private http: HttpClient) { }
    url = environment.baseUrl + Endpoint.systemUsers;

    getAllUsers(): Observable<any> {
        return this.http.get(this.url);
    }

    createUser(userInfo) {
        return this.http.post(this.url, userInfo);
    }
    // editUser() {}
    deleteUser(userId) {
        this.http.delete(this.url + userId)
    }
}