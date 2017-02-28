import {observable, action} from 'mobx'
import axios from 'axios'

// Quiz questions
import easyQuestions from '../../api/easyQuestions.json';

class AppState {
    @observable questions;
    @observable currentQuestionIndex;
    @observable difficulty;

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
}

export default AppState;
