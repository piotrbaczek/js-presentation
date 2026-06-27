"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraderResult = void 0;
const grades_enum_1 = require("./grades.enum");
class GraderResult {
    _studentName = '';
    _total = 0;
    _average = 0;
    _grade = grades_enum_1.GradesEnum.GRADE_F;
    set studentName(value) {
        this._studentName = value;
    }
    set total(value) {
        this._total = value;
    }
    set average(value) {
        this._average = value;
    }
    set grade(value) {
        this._grade = value;
    }
    toObject() {
        return {
            student: this._studentName,
            total: this._total,
            average: this._average,
            grade: this._grade?.toString()
        };
    }
}
exports.GraderResult = GraderResult;
//# sourceMappingURL=GraderResult.js.map