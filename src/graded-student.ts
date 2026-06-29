import { Score } from './score';

export class GradedStudent {
    public constructor(private _name: string, private _scores: Score[]) {
    }

    get name(): string {
        return this._name;
    }

    get scores(): Score[] {
        return this._scores;
    }
}