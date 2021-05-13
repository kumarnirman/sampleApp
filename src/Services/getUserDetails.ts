import { Http } from '@angular/http'
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Injectable } from '@angular/core';
import { BaseService } from './base-service';

@Injectable()

export class GetUserDetailsService extends BaseService {


    constructor(private http: Http) {
        super(http);
    }

    getUserDetails<T>(apiUrl: string): Observable<T>{
        return this.getCall(apiUrl);
    }

}