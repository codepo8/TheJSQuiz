import {observable, action} from 'mobx'
import axios from 'axios'

// Quiz questions
import easyQuestions from '../../api/easyQuestions.json';

class AppState {
    @observable questions;
    @observable currentQuestionIndex;
    @observable difficulty;
    @observable correctAnswerCount = 0;
    @observable incorrectAnswerCount = 0;
    @observable quizEnded = false;

    constructor() {
        this.currentQuestionIndex = 0;
    }

    @action setQuizDifficulty(difficulty) {
        this.difficulty = difficulty;
        this.setQuestions(); // Set questions to reflect updated difficulty
    }

    @action setQuestions() {
        switch (this.difficulty) {
            case 'beginner':
                this.questions = easyQuestions;
                break;

            case 'intermediate':
                this.questions = easyQuestions;
                break;

            case 'advanced':
                this.questions = easyQuestions;
                break;
        }
    }

    @action answerQuestion(answer) {
        if (answer.hasOwnProperty('answer') && answer.answer === true) {
            this.correctAnswer();
            return true;
        } else {
            this.incorrectAnswer();
            return false;
        }
    }

    correctAnswer() {
        if((this.currentQuestionIndex) === this.questions.length - 1) {
            console.log('True');
            this.quizEnded = true;
        } else {
            this.correctAnswerCount += 1;
            this.currentQuestionIndex += 1;
        }
    }

    incorrectAnswer() {
        this.incorrectAnswerCount += 1;
    }
}

export default AppState;
