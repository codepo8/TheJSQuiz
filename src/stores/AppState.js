import {observable, action} from 'mobx'
import axios from 'axios'

// Quiz questions
import beginnerQuestions from '../../api/questions/beginner.json';

class AppState {
    /*
        Quiz Related Code
    */
    @observable questions;
    @observable currentQuestionIndex;
    @observable difficulty;
    @observable correctAnswerCount = 0;
    @observable incorrectAnswerCount = 0;
    @observable incorrectNotification = false;
    @observable correctNotification = false;
    @observable quizEnded = false;

    constructor() {
        this.questions = [];
        this.apiUrl = `http://app.local/api/leaderboard.php`;
    }

    @action setQuizDifficulty(difficulty) {
        if (difficulty !== this.difficulty) {
            this.currentQuestionIndex = 0;
            this.difficulty = difficulty;
            this.setQuestions(); // Set questions to reflect updated difficulty
        }
    }

    @action setQuestions() {
        switch (this.difficulty) {
            case 'beginner':
                this.questions = beginnerQuestions;
                break;

            case 'intermediate':
                this.questions = beginnerQuestions;
                break;

            case 'advanced':
                this.questions = beginnerQuestions;
                break;
        }
    }

    @action answerQuestion(answer) {
        if (answer.hasOwnProperty('answer') && answer.answer === true) {
            this.correctAnswer();
        } else {
            this.incorrectAnswer();
            return false;
        }
    }

    correctAnswer() {
        if ((this.currentQuestionIndex) === this.questions.length - 1) {
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


    /*
        Leaderboard Related Code
    */

    async getLeaderboard(difficulty) {
        if(!difficulty) return;
        console.log('updating difficulty to', difficulty);
        let {data} = await axios.get(`${this.apiUrl}?difficulty=${difficulty}`);
        return data;
    }
}

export default AppState;