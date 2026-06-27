import { Grader } from './grader';
import { GradeAPlusHandler } from './handlers/grade-a-plus-handler';
import { GradeAHandler } from './handlers/grade-a-handler';
import { GradeBHandler } from './handlers/grade-b-handler';
import { GradeCHandler } from './handlers/grade-c-handler';
import { GradeDHandler } from './handlers/grade-d-handler';

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

grader
    .addGrade('maths', 95)
    .addGrade('english', 88)
    .addGrade('science', 91)
    .addGrade('computerScience', 86)
    .setStudentName('John Doe');

const result = grader.grade();
console.log(result.toObject());