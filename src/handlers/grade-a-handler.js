"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeAHandler = void 0;
const abstract_handler_1 = require("./abstract-handler");
const grades_enum_1 = require("../grades.enum");
class GradeAHandler extends abstract_handler_1.AbstractHandler {
    handle(request) {
        if (request >= 80) {
            return grades_enum_1.GradesEnum.GRADE_A;
        }
        return super.handle(request);
    }
}
exports.GradeAHandler = GradeAHandler;
//# sourceMappingURL=grade-a-handler.js.map