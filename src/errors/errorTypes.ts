import { CustomError } from './CustomError';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export class BadRequestError extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;
  status: 'error' = 'error';

  constructor(message: string, comingFrom: string) {
    super(message || ReasonPhrases.BAD_REQUEST, comingFrom);
  }
}

export class NotFoundError extends CustomError {
  statusCode = StatusCodes.NOT_FOUND;
  status: 'error' = 'error';

  constructor(message: string, comingFrom: string) {
    super(message || ReasonPhrases.NOT_FOUND, comingFrom);
  }
}

export class NotAuthorizedError extends CustomError {
  statusCode = StatusCodes.UNAUTHORIZED;
  status: 'error' = 'error';

  constructor(message: string, comingFrom: string) {
    super(message || ReasonPhrases.UNAUTHORIZED, comingFrom);
  }
}

export class FileTooLargeError extends CustomError {
  statusCode = StatusCodes.REQUEST_TOO_LONG;
  status: 'error' = 'error';

  constructor(message: string, comingFrom: string) {
    super(message || ReasonPhrases.REQUEST_TOO_LONG, comingFrom);
  }
}

export class ServerError extends CustomError {
  statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  status: 'error' = 'error';

  constructor(message: string, comingFrom: string) {
    super(message || ReasonPhrases.INTERNAL_SERVER_ERROR, comingFrom);
  }
}


export interface ErrNoException extends Error {
    errnum?: number;
    code?: string;
    path?: string;
    syscall?: string;
    stack?: string;
}

