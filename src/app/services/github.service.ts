import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { User } from '../models/user/user';
@Injectable()
export class GithubService {
  ROOT_URL:string;
  constructor(private http:HttpClient) { 
  	this.ROOT_URL="https://api.github.com"
  }
  getUserProfile(userId:string){
  	return this.http.get<User>(`${this.ROOT_URL}/users/${userId}`);
  }
}
