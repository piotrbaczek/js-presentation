import { GradesEnum } from '../grades.enum';

export interface Handler<Request = number, Result = GradesEnum> {
    setNext(handler: Handler<Request, Result>): Handler<Request, Result>;

    handle(request: Request): Result;
}