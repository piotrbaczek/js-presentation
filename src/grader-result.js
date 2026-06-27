import { GradesEnum } from './grades.enum';
export class GraderResult {
    _studentName = '';
    _total = 0;
    _average = 0;
    _grade = GradesEnum.GRADE_F;
    set studentName(value) {
        this._studentName = value;
    }
    set total(value) {
        this._total = value;
    }
    set average(value) {
        this._average = value;
    }
    set grade(value) {
        this._grade = value;
    }
    toObject() {
        return {
            student: this._studentName,
            total: this._total,
            average: this._average,
            grade: this._grade?.toString()
        };
    }
}
