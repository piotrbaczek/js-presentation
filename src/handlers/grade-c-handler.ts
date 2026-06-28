import { AbstractHandler } from './abstract-handler';
import { GradesEnum } from '../grades.enum';

export class GradeCHandler extends AbstractHandler {

    public handle(score: number): GradesEnum {
        if (score >= 60) {
            return GradesEnum.GRADE_C;
        }

        return super.handle(score);
    }
}