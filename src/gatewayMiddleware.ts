import JWT from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from './errors/errorTypes';

const tokens: string[] = ['auth', 'seller', 'software', 'search', 'buyer', 'message', 'order', 'review'];

export const gatewayMiddlewareRequest = (req: Request, res: Response, next: NextFunction) => {
    
    if (!req.headers?.gatewayToken) {
        throw new NotAuthorizedError('Unauthorized', 'gatewayMiddlewareRequest() method: Request not coming from API gateway');
    }

    const token: string = req.headers?.gatewayToken as string;

    if (!token) {
        throw new NotAuthorizedError('Unauthorized', 'gatewayMiddlewareRequest() method: Request not coming from API gateway');
    }
    
    try {
        const decodedToken: {id: string, iat: number} = JWT.verify(token, '') as { id: string; iat: number }; 
        if (!tokens.includes(decodedToken.id)) {
            throw new NotAuthorizedError('Unauthorized', 'gatewayMiddlewareRequest() method: Request of decoded token not valid');
        }
    } catch (error) {
        console.log(error);
        throw new NotAuthorizedError('Unauthorized', 'gatewayMiddlewareRequest() method: Request not coming from API gateway');
    };
};