import { AbstractHandler } from './abstract-handler';
import { GradesEnum } from '../grades.enum';

export class GradeAHandler extends AbstractHandler {

    handle(request: number): GradesEnum {
        if (request >= 80) {
            return GradesEnum.GRADE_A;
        }

        return super.handle(request);
    }
}