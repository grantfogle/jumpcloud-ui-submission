import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoint } from '../shared/endpoints';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root'})
export class UserService {
    constructor (private http: HttpClient) { }
    url = environment.baseUrl + Endpoint.systemUsers;

    getAllUsers(): Observable<any> {
        return this.http.get(this.url);
    }

    createUser(userInfo): Observable<any> {
        return this.http.post(this.url, userInfo);
    }

    updateUser(userId, userInfo): Observable<any> {
        return this.http.put(this.url + '/' + userId, userInfo);
    }

    deleteUser(userId): Observable<any> {
        return this.http.delete(this.url + '/' + userId);
    }
}