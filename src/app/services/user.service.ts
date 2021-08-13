import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoint } from '../shared/endpoints'
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root'})
export class UserService {
    constructor (private http: HttpClient) { }

    getAllUsers(): Observable<any> {
        return this.http.get(environment.baseUrl + Endpoint.systemUsers);
    }

    createUser(userInfo) {
        return this.http.post(environment.baseUrl + Endpoint.systemUsers, userInfo);
    }
    // editUser() {}
    // deleteUser() {}
}