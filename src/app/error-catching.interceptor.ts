import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ToastServiceService} from "./shared/toast-service.service";

@Injectable()

export class ErrorCatchingInterceptor implements HttpInterceptor{

  constructor(private toastService: ToastServiceService) {
  }

  handel422Errors (error: any) {
    if(error.error.data === null){
      this.toastService.showError(error.error.message)
    } else {
      for(const err in error.error.data){
        if(err!==null) {
          for(const msg of error.error.data[err]){
            this.toastService.showError(msg)
          }
          console.log("error",error)
        }
      }
    }
  }

  // handel401Errors () {
  //   this.cookieService.remove();
  //   localStorage.removeItem('token');
  //   this.config.panelClass = ['redSnackbar'];
  //   this.config.duration = 3000;
  //   this.matsnack.open(error.error.message, null, this.config);
  //   this.router.navigate(['login']);
  // }

  // handel404Errors () {
  //   this.config.panelClass = ['redSnackbar'];
  //   this.config.duration = 3000;
  //   this.matsnack.open(error.error.message, null, this.config);
  //   this.router.navigate(['/']);
  // }

  // hande500Errors () {
  //   this.config.panelClass = ['redSnackbar'];
  //   this.config.duration = 3000;
  //   this.matsnack.open('مشکلی در سمت سرور به وجود آمده است', null, this.config);
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        switch(error.status){
          case 422: {
            this.handel422Errors(error);
            break;
          }
        }
        return throwError(error)
      })
    )
  }
}
