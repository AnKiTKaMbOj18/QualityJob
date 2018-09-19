import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    const unAndPwBase64 = btoa(username+":"+password);
    const headers = {headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Basic '+unAndPwBase64})
    }

    // return this.http.get<any>('/users/login', headers).subscribe(result =>{
    //   console.log(result);
    // }, err=>{
    //   console.log(err);
    // });
    return this.http.get<any>('/users/login', headers)
    .pipe(map(user=>{
      if(user){
        localStorage.setItem('currentUser',JSON.stringify(user));
      }
      return user;
    },err=>{
      console.log(err);
    }));
  }
  logout(){
    localStorage.removeItem('currentUser');
  }
}
