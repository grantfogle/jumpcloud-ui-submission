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
        this.http.post(this.url, userInfo).subscribe(response => {
            console.log('response', response);
        });
    }
    updateUser(userId, userInfo) {
        return this.http.put(this.url + '/' + userId, userInfo);
        // if response is good, get all users
    }

    deleteUser(userId) {
        this.http.delete(this.url + '/' + userId).subscribe(response => {
            console.log('User successfully deleted', response);
            // if response is goood, get all users
        });
    }
}