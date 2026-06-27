import { AbstractHandler } from './abstract-handler';
import { GradesEnum } from '../grades.enum';
export class GradeBHandler extends AbstractHandler {
    handle(request) {
        if (request >= 70) {
            return GradesEnum.GRADE_B;
        }
        return super.handle(request);
    }
}
