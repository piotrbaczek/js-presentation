"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeBHandler = void 0;
const abstract_handler_1 = require("./abstract-handler");
const grades_enum_1 = require("../grades.enum");
class GradeBHandler extends abstract_handler_1.AbstractHandler {
    handle(request) {
        if (request >= 70) {
            return grades_enum_1.GradesEnum.GRADE_B;
        }
        return super.handle(request);
    }
}
exports.GradeBHandler = GradeBHandler;
//# sourceMappingURL=grade-b-handler.js.map