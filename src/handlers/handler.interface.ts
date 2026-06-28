import { GradesEnum } from '../grades.enum';

export interface Handler<Score = number, Grade = GradesEnum> {
    setNext(handler: Handler<Score, Grade>): Handler<Score, Grade>;

    handle(request: Score): Grade;
}