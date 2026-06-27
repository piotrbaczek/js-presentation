import { GradesEnum } from './grades.enum';
export declare class GraderResult {
    private _studentName;
    private _total;
    private _average;
    private _grade;
    set studentName(value: string);
    set total(value: number);
    set average(value: number);
    set grade(value: GradesEnum);
    toObject(): {
        student: string;
        total: number;
        average: number;
        grade: string;
    };
}
//# sourceMappingURL=grader-result.d.ts.map