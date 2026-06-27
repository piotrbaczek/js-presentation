"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeCHandler = void 0;
const abstract_handler_1 = require("./abstract-handler");
const grades_enum_1 = require("../grades.enum");
class GradeCHandler extends abstract_handler_1.AbstractHandler {
    handle(request) {
        if (request >= 60) {
            return grades_enum_1.GradesEnum.GRADE_C;
        }
        return super.handle(request);
    }
}
exports.GradeCHandler = GradeCHandler;
//# sourceMappingURL=grade-c-handler.js.map