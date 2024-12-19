import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('before', context);

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`after...${Date.now() - now}ms`)));
  }
}
