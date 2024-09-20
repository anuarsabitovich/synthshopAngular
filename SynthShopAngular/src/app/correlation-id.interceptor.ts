import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { CorrelationIdService } from './correlation-id.service';

@Injectable()
export class CorrelationIdInterceptor implements HttpInterceptor {
  constructor(private correlationIdService: CorrelationIdService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const correlationId = this.correlationIdService.getCorrelationId();
    const clonedRequest = req.clone({
      headers: req.headers.set('x-correlation-id', correlationId),
    });

    return next.handle(clonedRequest);
  }
}
