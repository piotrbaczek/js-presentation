import { GraderResult } from './grader-result';
import { Grade } from './grade';
export class Grader {
    _studentName = '';
    _grades = [];
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    addGrade(subject, grade) {
        this._grades.push(new Grade(subject, grade));
        return this;
    }
    set studentName(value) {
        this._studentName = value;
    }
    grade() {
        const graderResult = new GraderResult();
        graderResult.studentName = this._studentName;
        const gradesSum = this._grades
            .map((grade) => {
            return grade.grade;
        })
            .reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        }, 0);
        graderResult.total = gradesSum;
        graderResult.average = gradesSum / 4;
        graderResult.grade = this.handler.handle(gradesSum / 4);
        return graderResult;
    }
}
// const grader = new Grader(
//     new GradeAPlusHandler().setNext(
//         new GradeAHandler().setNext(
//             new GradeBHandler().setNext(
//                 new GradeCHandler().setNext(
//                     new GradeDHandler()
//                 )
//             )
//         )
//     )
// );
// grader.studentName = 'JohnDoe';
// grader.addGrade('math', 95);
// grader.addGrade('english', 88);
// grader.addGrade('science', 91);
// grader.addGrade('computer_science', 86);
//
// const graderResult = grader.grade();
// console.log(graderResult.toObject());
