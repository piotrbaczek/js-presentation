import { Grader } from './grader';
import { GradeAPlusHandler } from './handlers/grade-a-plus-handler';
import { GradeAHandler } from './handlers/grade-a-handler';
import { GradeBHandler } from './handlers/grade-b-handler';
import { GradeCHandler } from './handlers/grade-c-handler';
import { GradeDHandler } from './handlers/grade-d-handler';
import { GradedStudent } from './grader/graded-student';
import { Score } from './score';
import { GraderResultPrinter } from './grader-result-printer';

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

const grader = new Grader(handlers[0]);

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
GraderResultPrinter.print(graderResult);