import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServiceFactory {

  constructor(private http : Http) { }

  /**
   * Service to create User.
   */
  createUser = user => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:3000/users", user, {headers : headers});
  }

}
