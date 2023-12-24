import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RapidApiKeyInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const Key = '0b5eaf520aaf6d07935f284cf840bf29';
        const newRequest = request.clone({
            setHeaders: {
                // 'x-rapidapi-key': `${Key}`,
            },
        });
        return next.handle(newRequest);
    }
}
