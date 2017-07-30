import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private userUrl = '../user';
  constructor(private http: Http) { }
  getUser() {
    return this.http.get(this.userUrl)
             .toPromise()
             .then(response => {
               console.log(response.json());
               return response.json()

             })
             .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
}
