import { GradesEnum } from '../grades.enum';
export class AbstractHandler {
    nextHandler;
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return GradesEnum.GRADE_F;
    }
}
