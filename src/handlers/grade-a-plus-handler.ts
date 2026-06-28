import { AbstractHandler } from './abstract-handler';
import { GradesEnum } from '../grades.enum';

export class GradeAPlusHandler extends AbstractHandler {

    public handle(score: number): GradesEnum {
        if (score >= 90) {
            return GradesEnum.GRADE_A_PLUS;
        }

        return super.handle(score);
    }
}