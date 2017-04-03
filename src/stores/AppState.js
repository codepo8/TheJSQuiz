import {observable, action} from 'mobx'
import axios from 'axios'
import {limitArray, randomArray} from './helpers';

const apiUrl = "http://localhost:8000";

class AppState {
    @observable questions = [];
    @observable currentQuestionIndex;
    @observable difficulty;
    @observable correctAnswerCount = 0;
    @observable incorrectAnswerCount = 0;
    @observable incorrectNotification = false;
    @observable correctNotification = false;
    @observable quizEnded = false;

    @action setQuizDifficulty(difficulty) {
        if (difficulty !== this.difficulty) {
            this.currentQuestionIndex = 0;
            this.difficulty = difficulty;
            this.correctAnswerCount = 0;
            this.incorrectAnswerCount = 0;
            this.quizEnded = false;
            this.setQuestions();
        }
    }

    @action resetQuiz() {
        this.difficulty = "";
        this.correctAnswerCount = 0;
        this.incorrectAnswerCount = 0;
        this.quizEnded = false;
    }

    setQuestions() {
        this.questions = [];

        axios.get(`${apiUrl}/questions/${this.difficulty}`)
            .then(res => this.questions = limitArray(randomArray(res.data), 1));
    }

    answerQuestion(answer) {
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
}

export default AppState;