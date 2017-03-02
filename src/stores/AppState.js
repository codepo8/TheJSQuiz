import {observable, action} from 'mobx'
import axios from 'axios'

// Quiz questions
import easyQuestions from '../../api/easyQuestions.json';

class AppState {
    @observable questions;
    @observable currentQuestionIndex;
    @observable difficulty;
    @observable correntAnswerCount = 0;
    @observable incorrentAnswerCount = 0;

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
            console.log('Correct answer');
            this.correntAnswerCount += 1;
            this.currentQuestionIndex += 1;
            return true;
        } else {
            console.log('Incorrect answer');
            this.incorrentAnswerCount += 1;

            return false;
        }
    }
}

export default AppState;
