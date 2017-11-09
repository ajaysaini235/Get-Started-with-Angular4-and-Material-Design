import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface User{
 name:string
 role:string
}

@Injectable()
export class UserAuthService {
  currentUser:User
  constructor(private http:Http) { }

  login(userObj:string):Observable<any>{
    return this.http.get(userObj).map((res) => {
      var data = res.json();
      if(data){
        this.currentUser=data;
        localStorage.setItem("usertracking",JSON.stringify(data));
      }else{
        localStorage.removeItem("usertracking");
      }
      return data;
    })
  }

  isLogin():Promise<boolean>{
    var user =localStorage.getItem("usertracking");
    return new Promise((resolve,reject) => {
      if(user){
        this.currentUser=JSON.parse(user);
        resolve(true)
      }else{
        reject(false)
      }
    })
  }

  logout(){
    localStorage.clear();
  }

}
