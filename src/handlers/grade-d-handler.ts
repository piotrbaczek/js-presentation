import { AbstractHandler } from './abstract-handler';
import { GradesEnum } from '../grades.enum';

export class GradeDHandler extends AbstractHandler {

    public handle(score: number): GradesEnum {
        if (score >= 50) {
            return GradesEnum.GRADE_D;
        }

        return super.handle(score);
    }
}