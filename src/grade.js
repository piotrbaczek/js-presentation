"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grade = void 0;
class Grade {
    _subject;
    _grade;
    constructor(_subject, _grade) {
        this._subject = _subject;
        this._grade = _grade;
    }
    get subject() {
        return this._subject;
    }
    get grade() {
        return this._grade;
    }
}
exports.Grade = Grade;
//# sourceMappingURL=grade.js.map