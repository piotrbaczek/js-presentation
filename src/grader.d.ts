import { GraderResult } from './GraderResult';
import { Handler } from './handlers/handler.interface';
export declare class Grader {
    private _studentName;
    private _grades;
    private handler;
    constructor(handler: Handler);
    addGrade(subject: string, grade: number): Grader;
    set studentName(value: string);
    grade(): GraderResult;
}
//# sourceMappingURL=grader.d.ts.map