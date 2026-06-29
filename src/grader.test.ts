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
            'John Doe',
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

    test('values work for student with 80 average score', () => {
        const gradedStudent = new GradedStudent(
            'John Doe',
            [
                new Score('maths', 80),
                new Score('english', 80),
                new Score('science', 80),
                new Score('computer-science', 80)
            ]
        );

        const graderResult = grader.grade(gradedStudent);

        expect(graderResult.studentName).equal('John Doe');
        expect(graderResult.total).equal(320);
        expect(graderResult.average).equal(80);
        expect(graderResult.grade).equal(GradesEnum.GRADE_A);
    });

    test('values work for student with 70 average score', () => {
        const gradedStudent = new GradedStudent(
            'John Doe',
            [
                new Score('maths', 70),
                new Score('english', 70),
                new Score('science', 70),
                new Score('computer-science', 70)
            ]
        );

        const graderResult = grader.grade(gradedStudent);

        expect(graderResult.studentName).equal('John Doe');
        expect(graderResult.total).equal(280);
        expect(graderResult.average).equal(70);
        expect(graderResult.grade).equal(GradesEnum.GRADE_B);
    });

    test('values work for student with 60 average score', () => {
        const gradedStudent = new GradedStudent(
            'John Doe',
            [
                new Score('maths', 60),
                new Score('english', 60),
                new Score('science', 60),
                new Score('computer-science', 60)
            ]
        );

        const graderResult = grader.grade(gradedStudent);

        expect(graderResult.studentName).equal('John Doe');
        expect(graderResult.total).equal(240);
        expect(graderResult.average).equal(60);
        expect(graderResult.grade).equal(GradesEnum.GRADE_C);
    });

    test('values work for student with 50 average score', () => {
        const gradedStudent = new GradedStudent(
            'John Doe',
            [
                new Score('maths', 50),
                new Score('english', 50),
                new Score('science', 50),
                new Score('computer-science', 50)
            ]
        );

        const graderResult = grader.grade(gradedStudent);

        expect(graderResult.studentName).equal('John Doe');
        expect(graderResult.total).equal(200);
        expect(graderResult.average).equal(50);
        expect(graderResult.grade).equal(GradesEnum.GRADE_D);
    });

    test('values work for student with below 50 average score', () => {
        const gradedStudent = new GradedStudent(
            'John Doe',
            [
                new Score('maths', 40),
                new Score('english', 45),
                new Score('science', 50),
                new Score('computer-science', 45)
            ]
        );

        const graderResult = grader.grade(gradedStudent);

        expect(graderResult.studentName).equal('John Doe');
        expect(graderResult.total).equal(180);
        expect(graderResult.average).equal(45);
        expect(graderResult.grade).equal(GradesEnum.GRADE_F);
    });
});