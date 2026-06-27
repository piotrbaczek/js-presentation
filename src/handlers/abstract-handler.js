"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractHandler = void 0;
const grades_enum_1 = require("../grades.enum");
class AbstractHandler {
    nextHandler;
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return grades_enum_1.GradesEnum.GRADE_F;
    }
}
exports.AbstractHandler = AbstractHandler;
//# sourceMappingURL=abstract-handler.js.map