export class Grade {
    constructor(
        private _subject: string,
        private _grade: number
    ) {
    }

    get subject(): string {
        return this._subject;
    }

    get grade(): number {
        return this._grade;
    }
}