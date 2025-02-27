import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {
  HttpClient, HttpEventType,
  HttpHandlerFn,
  HttpInterceptor,
  HttpRequest,
  provideHttpClient,
  withInterceptors
} from "@angular/common/http";
import {tap} from "rxjs";

function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn) {
  const req = request.clone({
    //headers: request.headers.set("X-Debug", "Testing"), // CORS conflict
  });
  console.log("[Outgoing Request]");
  console.log(req);
  return next(req).pipe(
    tap({
      next: event => {
        if (event.type === HttpEventType.Response){
          console.log("[Incoming Response]");
          console.log(event.status);
          console.log(event.body);
        }
      }
    })
  );
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([loggingInterceptor])
  )
  ]}).catch((err) => console.error(err));
