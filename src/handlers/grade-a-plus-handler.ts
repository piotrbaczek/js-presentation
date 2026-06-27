import { AbstractHandler } from './abstract-handler';
import { GradesEnum } from '../grades.enum';

export class GradeAPlusHandler extends AbstractHandler {

    handle(request: number): GradesEnum {
        if (request >= 90) {
            return GradesEnum.GRADE_A_PLUS;
        }

        return super.handle(request);
    }
}