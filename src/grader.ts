export class Grader {
    constructor(
        private name: string,
        private mathScore: number,
        private englishScore: number,
        private scienceScore: number,
        private computerScienceScore: number
    ) {
    }
}

const grader = new Grader('John Doe', 95, 88, 91, 86);