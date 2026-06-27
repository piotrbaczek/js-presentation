import { GradesEnum } from './grades.enum';

export class GraderResult {
    private _studentName: string = '';
    private _total: number = 0;
    private _average: number = 0;
    private _grade: GradesEnum = GradesEnum.GRADE_F;

    set studentName(value: string) {
        this._studentName = value;
    }

    set total(value: number) {
        this._total = value;
    }

    set average(value: number) {
        this._average = value;
    }

    set grade(value: GradesEnum) {
        this._grade = value;
    }

    get studentName(): string {
        return this._studentName;
    }

    get total(): number {
        return this._total;
    }

    get average(): number {
        return this._average;
    }

    get grade(): GradesEnum {
        return this._grade;
    }

    public toObject(): { student: string, total: number, average: string, grade: string } {
        return {
            student: this._studentName,
            total: this._total,
            average: this._average.toFixed(2),
            grade: this._grade.toString()
        };
    }
}