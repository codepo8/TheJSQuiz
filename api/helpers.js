module.exports = {
    validate: {
        question: function (data) {
            let { title = "", snippet = "", answers = [], difficulty = "" } = data;
            let difficulties = ["beginner", "intermediate", "hard"];

            if(typeof title !== "string" || title.length < 3) return { error: 'Title invalid' };
            if(typeof difficulty !== "string" || difficulties.indexOf(difficulty) === -1) return { error: 'Invalid difficulty' };
            if(snippet !== "undefined" && typeof snippet !== "string") return { error: 'Snippet invalid' };
            if(!Array.isArray(answers) || answers.length < 2) return { error: 'Invalid answers list' };

            return data;
        },
        score: function (data) {

        }
    }
};