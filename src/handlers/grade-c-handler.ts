import { AbstractHandler } from './abstract-handler';
import { GradesEnum } from '../grades.enum';

export class GradeCHandler extends AbstractHandler {

    handle(request: number): GradesEnum {
        if (request >= 60) {
            return GradesEnum.GRADE_C;
        }

        return super.handle(request);
    }
}