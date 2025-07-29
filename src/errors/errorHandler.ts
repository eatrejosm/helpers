import { CustomError } from './CustomError';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export const handleError = (error: unknown, comingFrom: string) => {
  if (error instanceof CustomError) {
    return error.serializeErrors();
  }

  console.error(` Unhandled Error from ${comingFrom}:`, error);

  return {
    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    status: 'error',
    comingFrom,
    timestamp: new Date().toISOString(),
  };
};
