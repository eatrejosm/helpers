import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export interface IError {
  message: string;
  statusCode: number;
  status: 'error' | 'warning' | 'info';
  comingFrom: string;
  timestamp: string;
}

export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract status: 'error' | 'warning' | 'info';
  comingFrom: string;

  constructor(message: string, comingFrom: string) {
    super(message);
    this.comingFrom = comingFrom;
  }

  serializeErrors(): IError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      status: this.status,
      comingFrom: this.comingFrom,
      timestamp: new Date().toISOString(),
    };
  }
}
