import { beforeAll, describe, expect, test } from 'vitest';
import { GradeAPlusHandler } from './handlers/grade-a-plus-handler';
import { GradeAHandler } from './handlers/grade-a-handler';
import { GradeBHandler } from './handlers/grade-b-handler';
import { GradeCHandler } from './handlers/grade-c-handler';
import { GradeDHandler } from './handlers/grade-d-handler';
import { Grader } from './grader';
import { GradedStudent } from './graded-student';
import { Score } from './score';
import { GradesEnum } from './grades.enum';

describe('it should process everything correctly', () => {
    let grader: Grader;
    beforeAll(() => {
        const handlers = [
            new GradeAPlusHandler(),
            new GradeAHandler(),
            new GradeBHandler(),
            new GradeCHandler(),
            new GradeDHandler(),
        ];

        handlers.reduce((current, next) => {
            current.setNext(next);
            return next;
        });

        grader = new Grader(handlers[0]);
    });
    test('values work for student with 90 average score', () => {
        const gradedStudent = new GradedStudent(
            'JohnDoe',
            [
                new Score('maths', 95),
                new Score('english', 88),
                new Score('science', 91),
                new Score('computer-science', 86)
            ]
        );

        const graderResult = grader.grade(gradedStudent);
        expect(graderResult.studentName).equal('John Doe');
        expect(graderResult.total).equal(360);
        expect(graderResult.average).equal(90);
        expect(graderResult.grade).equal(GradesEnum.GRADE_A_PLUS);
    });
});