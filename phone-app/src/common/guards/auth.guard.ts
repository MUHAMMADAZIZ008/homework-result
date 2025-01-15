import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GenerateJwtTokens } from '../tokens/token.provider';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly tokenManage: GenerateJwtTokens) {}

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private async validateRequest(request: any) {
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return false;
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = await this.tokenManage.verifyAccessToken(token);

      if (!decoded) {
        throw new Error();
      }
      request.user = decoded;
      return true;
    } catch {
      return false;
    }
  }
}
