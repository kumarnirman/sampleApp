import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Injectable } from '@angular/core';

@Injectable()
export class BaseService  {

    constructor(private httpClient: Http) {
           
    }

    public getCall<T>(apiUrl: string): Observable<T> {

        return this.httpClient.get(apiUrl).map(res => res.json());
  
    }

}