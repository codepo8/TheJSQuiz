module.exports = function (mongoose) {
    const Question = new mongoose.Schema({
        title: String,
        snippet: String,
        difficulty: String,
        answers: [{
            value: String,
            isCorrect: Boolean
        }]
    });

    const Score = new mongoose.Schema({
        username: String,
        github: String,
        difficulty: String,
        score: Number
    });

    return {
        Question: mongoose.model('Questions', Question),
        Score: mongoose.model('Leaderboard', Score)
    }
};