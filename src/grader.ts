import { GraderResult } from './grader-result';
import type { Handler } from './handlers/handler.interface';
import { Score } from './score';
import { GradedStudent } from './graded-student';

export class Grader {
    public constructor(private gradeHandler: Handler) {
    }

    public grade(gradedStudent: GradedStudent): GraderResult {
        const graderResult = new GraderResult();
        graderResult.studentName = gradedStudent.name;

        const scoreSum = this.calculateScoreSum(gradedStudent);

        const gradeAverage = scoreSum / gradedStudent.scores.length;
        graderResult.total = scoreSum;
        graderResult.average = gradeAverage;
        graderResult.grade = this.gradeHandler.handle(gradeAverage);

        return graderResult;
    }

    private calculateScoreSum(gradedStudent: GradedStudent): number {
        return gradedStudent.scores
            .map((score: Score) => {
                return score.score;
            })
            .reduce((previousScore: number, nextScore: number) => {
                return previousScore + nextScore;
            }, 0);
    }
}