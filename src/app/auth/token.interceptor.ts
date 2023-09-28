import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

let loadCounts = 0;

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let modifiedReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${environment.token}`,
      },
    });
    loadCounts++;
    this.spinner.show();
    return next.handle(modifiedReq).pipe(
      finalize(() => {
        loadCounts--;
        if (loadCounts == 0) {
          this.spinner.hide();
        }
      })
    );
  }
}
