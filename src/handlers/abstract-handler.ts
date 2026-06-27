import { Handler } from './handler.interface';
import { GradesEnum } from '../grades.enum';

export abstract class AbstractHandler implements Handler
{
    private nextHandler: Handler | undefined;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;

        return handler;
    }

    public handle(request: number): GradesEnum {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return GradesEnum.GRADE_F;
    }
}