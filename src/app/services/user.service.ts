import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, GroupedObservable } from 'rxjs';
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
        console.log('bing', userInfo);
        return this.http.post(this.url, userInfo);
    }
    
    updateUser(userId, userInfo) {
        return this.http.put(this.url + '/' + userId, userInfo);
    }

    deleteUser(userId) {
        return this.http.delete(this.url + '/' + userId);
    }
}