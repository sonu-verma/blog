import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Url : string;
  token: string;
  header: any;

  constructor( private http : HttpClient ) {
      this.Url = 'http://localhost:89/';

      const headerSettings: {[name: string]: string | string[]; } = {};
      this.header = new HttpHeaders(headerSettings);

  }

  Login(model : any){
      return this.http.post<any>(this.Url+'test.php',model,{ headers: this.header});
  }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('token');
    }
}


