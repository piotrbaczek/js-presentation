import { GraderResult } from './grader-result';

export abstract class GraderResultPrinter {
    public static print(graderResult: GraderResult) {
        console.log('===== Student result =====');
        console.log('Student name: ' + graderResult.studentName);
        console.log('Total: ' + graderResult.total);
        console.log('Average: ' + graderResult.average);
        console.log('Grade: ' + graderResult.grade);
    }
}