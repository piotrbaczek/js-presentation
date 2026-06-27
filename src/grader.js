"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grader = void 0;
const GraderResult_1 = require("./GraderResult");
const grade_1 = require("./grade");
const grade_a_handler_1 = require("./handlers/grade-a-handler");
const grade_b_handler_1 = require("./handlers/grade-b-handler");
const grade_d_handler_1 = require("./handlers/grade-d-handler");
const grade_c_handler_1 = require("./handlers/grade-c-handler");
const grade_a_plus_handler_1 = require("./handlers/grade-a-plus-handler");
class Grader {
    _studentName = '';
    _grades = [];
    handler;
    constructor(handler) {
        this.handler = handler;
    }
    addGrade(subject, grade) {
        this._grades.push(new grade_1.Grade(subject, grade));
        return this;
    }
    set studentName(value) {
        this._studentName = value;
    }
    grade() {
        const graderResult = new GraderResult_1.GraderResult();
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
exports.Grader = Grader;
const grader = new Grader(new grade_a_plus_handler_1.GradeAPlusHandler().setNext(new grade_a_handler_1.GradeAHandler().setNext(new grade_b_handler_1.GradeBHandler().setNext(new grade_c_handler_1.GradeCHandler().setNext(new grade_d_handler_1.GradeDHandler())))));
grader.studentName = 'JohnDoe';
grader.addGrade('math', 95);
grader.addGrade('english', 88);
grader.addGrade('science', 91);
grader.addGrade('computer_science', 86);
const graderResult = grader.grade();
console.log(graderResult.toObject());
//# sourceMappingURL=grader.js.map