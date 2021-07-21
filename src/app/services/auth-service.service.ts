import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthResult, UserLogin} from "../interfaces";
import {catchError, map, shareReplay} from 'rxjs/operators'
import {environment} from "../../environments/environment";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {



  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<AuthResult>(environment.appurl + 'user/login', JSON.stringify({
      'email': email,
      'password': password
    })).pipe(
      map(res => {
        this.setSession(res);
        return res;
      }), catchError((error:any) => {
        console.log('error: ',error);
        return throwError(error);
      }));
  }

  private setSession(authResult: AuthResult) {

    localStorage.setItem('token', authResult.token);
  }

  logout() {
    localStorage.removeItem("toke");
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token != undefined && token?.length > 0) {
      return true;
    }
    return false;
  }


}
