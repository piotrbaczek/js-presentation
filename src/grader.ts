import { GraderResult } from './GraderResult';
import { Handler } from './handlers/handler.interface';
import { Grade } from './grade';
import {GradeAHandler} from "./handlers/grade-a-handler";
import {GradeBHandler} from "./handlers/grade-b-handler";
import {GradeDHandler} from "./handlers/grade-d-handler";
import {GradeCHandler} from "./handlers/grade-c-handler";
import {GradeAPlusHandler} from "./handlers/grade-a-plus-handler";

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
        graderResult.total = gradesSum
        graderResult.average = gradesSum / 4;
        graderResult.grade = this.handler.handle(gradesSum / 4);
        return graderResult;
    }
}

const grader = new Grader(
    new GradeAPlusHandler().setNext(
        new GradeAHandler().setNext(
            new GradeBHandler().setNext(
                new GradeCHandler().setNext(
                    new GradeDHandler()
                )
            )
        )
    )
);
grader.studentName = 'JohnDoe';
grader.addGrade('math', 95);
grader.addGrade('english', 88);
grader.addGrade('science', 91);
grader.addGrade('computer_science', 86);

const graderResult = grader.grade();
console.log(graderResult.toObject());