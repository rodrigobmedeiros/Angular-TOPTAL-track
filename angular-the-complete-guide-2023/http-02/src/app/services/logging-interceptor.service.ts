import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";


export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Logging...');
    return next.handle(req).pipe(tap((event) => {
      if (event.type === HttpEventType.Response) {
        console.log(event.body)
        console.log(event.headers);
      }
    }))
  }
}