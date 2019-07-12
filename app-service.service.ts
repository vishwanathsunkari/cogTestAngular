import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  appUrl = "https://api.github.com/users/hadley/orgs";
  constructor(private http: HttpClient) { }
  

  private extractData(res: Response){
    const body = res;
    return body || {};
  }

  getUsers() : Observable<any> {
    return this.http.get(this.appUrl).pipe(map(this.extractData));
  }

}
