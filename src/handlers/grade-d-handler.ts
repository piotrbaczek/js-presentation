import { AbstractHandler } from './abstract-handler';
import { GradesEnum } from '../grades.enum';

export class GradeDHandler extends AbstractHandler {

    handle(request: number): GradesEnum {
        if (request >= 50) {
            return GradesEnum.GRADE_D;
        }

        return super.handle(request);
    }
}