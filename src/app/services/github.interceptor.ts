import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { User } from '../models/user/user';
@Injectable()
export class GithubInterceptor implements HttpInterceptor {
	intercept(req:HttpRequest<User>,next: HttpHandler){
		const newRequest=req.clone({
			headers:req.headers.set('Authorization',"fcbd5bd93348acf0836596e5c2fb22ddfd28cb88")
		})
		// console.log(newRequest);
		// return next.handle(req).do(
		return next.handle(newRequest).do(
			// console.log;
			succ=>console.log(succ),
			err=>{
				if (err.status===401){
					console.log("You are not authenticated");
					// console.log(err.statusText);
				}else{
					console.log(err.statusText);
				}
			}
		);
	}
}
