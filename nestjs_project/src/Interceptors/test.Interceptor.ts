import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('interceptor Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`interceptor After... ${Date.now() - now}ms`)),
      );
  }
}