import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Login } from '../modal/login';
import { Signup } from '../modal/signup';
//import { User } from '../model/user';
import { SignupComponent } from '../signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{ 
  addUser(signup: Signup): Observable<Signup> 
  {
    return this.httpClient.post<Signup>('http://localhost:8088/api/user/register', signup);
  }

  constructor(private httpClient: HttpClient) {}

 
  getusers(userr: Login) {
    console.log("GET USER");
    console.log(userr.username);
    console.log(userr.password);
    console.log(userr.type);

    return this.httpClient.post<any>(`http://localhost:8088/api/users/login`, userr, { headers: new HttpHeaders().set('responseType', 'text') }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', userr.username);
          let tokenStr = userData.token;
          console.log("Token string: " + tokenStr);
          localStorage.setItem('token', tokenStr);
          return userData;
        }
      )
    );
  }

  setBearerToken(token: string) {
    sessionStorage.setItem('token', token);
  }
}

 // loginUrl : string = '';
  // signUpUrl : string ='';

  // constructor(private http : HttpClient) 
  // {
  //   this.loginUrl = "http://localhost:8080/auth/login";
  //   this.signUpUrl = "http://localhost:8080/auth/register";
  // }
  // login(user : User) : Observable<any>
  // {
  //   return this.http.post<any>(this.loginUrl,user);
  // }
  // signUp(user : User) : Observable<any>
  // {
  //   return this.http.post<any>(this.signUpUrl,user);
  // }