import { Handler } from './handler.interface';
import { GradesEnum } from '../grades.enum';
export declare abstract class AbstractHandler implements Handler {
    private nextHandler;
    setNext(handler: Handler): Handler;
    handle(request: number): GradesEnum;
}
//# sourceMappingURL=abstract-handler.d.ts.map