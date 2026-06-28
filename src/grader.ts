import { GraderResult } from './grader-result';
import type { Handler } from './handlers/handler.interface';
import { Score } from './score';

export class Grader {
    private _studentName: string = '';
    private _scores: Score[] = [];
    private _gradeHandler: Handler;

    public constructor(gradeHandler: Handler) {
        this._gradeHandler = gradeHandler;
    }

    public addScore(subject: string, grade: number): Grader {
        this._scores.push(new Score(subject, grade));

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

        const gradeAverage = scoreSum / this._scores.length;
        graderResult.total = scoreSum;
        graderResult.average = gradeAverage;
        graderResult.grade = this._gradeHandler.handle(gradeAverage);

        return graderResult;
    }

    private calculateScoreSum(): number {
        return this._scores
            .map((score: Score) => {
                return score.score;
            })
            .reduce((previousScore: number, nextScore: number) => {
                return previousScore + nextScore;
            }, 0);
    }
}