"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeDHandler = void 0;
const abstract_handler_1 = require("./abstract-handler");
const grades_enum_1 = require("../grades.enum");
class GradeDHandler extends abstract_handler_1.AbstractHandler {
    handle(request) {
        if (request >= 50) {
            return grades_enum_1.GradesEnum.GRADE_D;
        }
        return super.handle(request);
    }
}
exports.GradeDHandler = GradeDHandler;
//# sourceMappingURL=grade-d-handler.js.map