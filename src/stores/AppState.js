import {observable, action} from 'mobx'
import axios from 'axios'

// Quiz questions
const apiUrl = "http://localhost:8000";

class AppState {
    @observable questions;
    @observable currentQuestionIndex;
    @observable difficulty;
    @observable correctAnswerCount = 0;
    @observable incorrectAnswerCount = 0;
    @observable incorrectNotification = false;
    @observable correctNotification = false;
    @observable quizEnded = false;

    constructor() { this.questions = [] }

    @action setQuizDifficulty(difficulty) {
        if (difficulty !== this.difficulty) {
            this.currentQuestionIndex = 0;
            this.difficulty = difficulty;
            this.setQuestions();
        }
    }

    randomArray(arr) {
        return arr.sort(() => .5 - Math.random());
    }

    limitArray(arr, size) {
        return arr.slice(0, size);
    }

    @action setQuestions() {
        axios.get(`${apiUrl}/questions/${this.difficulty}`)
            .then(res => this.questions = this.limitArray(this.randomArray(res.data), 10));
    }

    @action answerQuestion(answer) {
        if (answer.isCorrect === true) return this.correctAnswer();
        this.incorrectAnswer();
        return false;
    }

    correctAnswer() {
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.quizEnded = true;
            this.correctAnswerCount += 1;
        } else {
            this.correctNotification = true;

            setTimeout(() => {
                this.correctNotification = false;
                this.correctAnswerCount += 1;
                this.currentQuestionIndex += 1;
            }, 1500)
        }
    }

    incorrectAnswer() {
        this.incorrectAnswerCount += 1;
        this.incorrectNotification = true;

        setTimeout(() => {
            this.incorrectNotification = false;
        }, 1500)
    }

    async getLeaderboard(difficulty) {
        return '';
    }
}

export default AppState;