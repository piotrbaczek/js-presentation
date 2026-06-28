import { AbstractHandler } from './abstract-handler';
import { GradesEnum } from '../grades.enum';

export class GradeBHandler extends AbstractHandler {

    public handle(score: number): GradesEnum {
        if (score >= 70) {
            return GradesEnum.GRADE_B;
        }

        return super.handle(score);
    }
}