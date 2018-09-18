import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { User } from '../user.model';

const httpOptions ={
  header: new HttpHeaders({'Content-type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  baseUrl:string='http://localhost:8090/users';

  getUsers(){
    return this.http.get<User[]>(this.baseUrl+"/");
  }

  getUser(id:number){
    return this.http.get<User>(this.baseUrl+"/"+id);
  }

  createUser(user:User){
   return this.http.post(this.baseUrl,user);
  }

  updateUser(user:User){
   return this.http.put(this.baseUrl+"/"+user.id,user);
  }

  deleteUser(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }

}
