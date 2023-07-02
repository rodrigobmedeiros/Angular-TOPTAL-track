import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Passing through interceptor...');
    const modifiedReq = req.clone({headers: req.headers.append('auth', 'xyz')});
    return next.handle(modifiedReq).pipe(tap((event) => {
      console.log(event);
      if (event.type === HttpEventType.Response) {
        console.log('Response has arrived...')
        console.log(event.body);
      }
    }))
  }
}