import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { delay, Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable()
export class ErrorInterceptor implements HttpInterceptor{


  constructor(private router:Router){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
     
    )

  }

}
