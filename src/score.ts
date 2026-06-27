export class Score {
    constructor(
        private _subject: string,
        private _score: number
    ) {
    }

    get subject(): string {
        return this._subject;
    }

    get score(): number {
        return this._score;
    }
}