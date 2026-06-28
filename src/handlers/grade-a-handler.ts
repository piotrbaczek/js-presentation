import { AbstractHandler } from './abstract-handler';
import { GradesEnum } from '../grades.enum';

export class GradeAHandler extends AbstractHandler {

    public handle(score: number): GradesEnum {
        if (score >= 80) {
            return GradesEnum.GRADE_A;
        }

        return super.handle(score);
    }
}