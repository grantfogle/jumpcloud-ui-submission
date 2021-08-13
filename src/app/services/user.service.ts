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
        console.log('bing', userInfo);
        this.http.post(this.url, userInfo).subscribe(response => {
            console.log('response', response);
        });
        // return this.http.post(this.url, userInfo);
    }
    // editUser() {}
    deleteUser(userId) {
        console.log('hit', userId)
        this.http.delete(this.url + '/' + userId).subscribe(response => {
            console.log('User successfully deleted', response);
        });
    }
}