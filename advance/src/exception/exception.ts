import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFound extends HttpException {
  constructor(readonly message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
}

export class AlreadyExsist extends HttpException {
  constructor(readonly message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export class NotFound extends HttpException {
  constructor(readonly message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
}
export class ForbiddenException extends HttpException {
  constructor(readonly message: string) {
    super(message, HttpStatus.FORBIDDEN);
  }
}
