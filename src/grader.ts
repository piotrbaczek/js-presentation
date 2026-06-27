import { GraderResult } from './grader-result';
import type { Handler } from './handlers/handler.interface';
import { Grade } from './grade';

export class Grader {
    private _studentName: string = '';
    private _grades: Grade[] = [];
    private handler: Handler;

    public constructor(handler: Handler) {
        this.handler = handler;
    }

    public addGrade(subject: string, grade: number): Grader {
        this._grades.push(new Grade(subject, grade));

        return this;
    }

    set studentName(value: string) {
        this._studentName = value;
    }

    public grade(): GraderResult {
        const graderResult = new GraderResult();
        graderResult.studentName = this._studentName;
        const gradesSum = this._grades
            .map((grade: Grade) => {
                return grade.grade;
            })
            .reduce((previousValue: number, currentValue: number) => {
                return previousValue + currentValue;
            }, 0);
        const gradeAverage = gradesSum / this._grades.length;
        graderResult.total = gradesSum
        graderResult.average = gradeAverage;
        graderResult.grade = this.handler.handle(gradeAverage);
        return graderResult;
    }
}