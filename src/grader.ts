import { GraderResult } from './grader-result';
import type { Handler } from './handlers/handler.interface';
import { Score } from './score';

export class Grader {
    private _studentName: string = '';
    private _grades: Score[] = [];
    private _handler: Handler;

    public constructor(handler: Handler) {
        this._handler = handler;
    }

    public addGrade(subject: string, grade: number): Grader {
        this._grades.push(new Score(subject, grade));

        return this;
    }

    public setStudentName(studentName: string): Grader {
        this._studentName = studentName;

        return this;
    }

    public grade(): GraderResult {
        const graderResult = new GraderResult();
        graderResult.studentName = this._studentName;

        const scoreSum = this.calculateScoreSum();

        const gradeAverage = scoreSum / this._grades.length;
        graderResult.total = scoreSum;
        graderResult.average = gradeAverage;
        graderResult.grade = this._handler.handle(gradeAverage);

        return graderResult;
    }

    private calculateScoreSum(): number {
        return this._grades
            .map((score: Score) => {
                return score.score;
            })
            .reduce((previousScore: number, nextScore: number) => {
                return previousScore + nextScore;
            }, 0);
    }
}