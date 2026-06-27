import { Grader } from './grader';
import { GradeAPlusHandler } from './handlers/grade-a-plus-handler';
import { GradeAHandler } from './handlers/grade-a-handler';
import { GradeBHandler } from './handlers/grade-b-handler';
import { GradeCHandler } from './handlers/grade-c-handler';
import { GradeDHandler } from './handlers/grade-d-handler';

const grader = new Grader(
    new GradeDHandler().setNext(
        new GradeCHandler().setNext(
            new GradeBHandler().setNext(
                new GradeAHandler().setNext(
                    new GradeAPlusHandler()
                )
            )
        )
    )
);

grader.addGrade('maths', 95);
grader.addGrade('english', 88);
grader.addGrade('science', 91);
grader.addGrade('computerScience', 86);
grader.studentName = 'John Doe';

const result = grader.grade();
console.log(result.toObject());