"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeAPlusHandler = void 0;
const abstract_handler_1 = require("./abstract-handler");
const grades_enum_1 = require("../grades.enum");
class GradeAPlusHandler extends abstract_handler_1.AbstractHandler {
    handle(request) {
        if (request >= 90) {
            return grades_enum_1.GradesEnum.GRADE_A_PLUS;
        }
        return super.handle(request);
    }
}
exports.GradeAPlusHandler = GradeAPlusHandler;
//# sourceMappingURL=grade-a-plus-handler.js.map