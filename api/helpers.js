let difficulties = ["beginner", "intermediate", "advanced"];

module.exports = {
    validate: {
        question: function (data) {
            let { title = "", snippet = "", answers = [], difficulty = "" } = data;

            if(typeof title !== "string" || title.length < 3) return { error: 'Title invalid' };
            if(typeof difficulty !== "string" || difficulties.indexOf(difficulty) === -1) return { error: 'Invalid difficulty' };
            if(!Array.isArray(answers) || answers.length < 2) return { error: 'Invalid answers list' };

            return data;
        },
        addScore: function (data) {
            let { name = "", github = "", difficulty, score } = data;

            if(typeof name !== "string" || name.length < 3) return { error: 'Name invalid' };
            if(github && typeof github !== "string") return { error: 'Invalid GitHub link' };
            if(typeof difficulty !== "string" || difficulties.indexOf(difficulty) === -1) return { error: 'Invalid difficulty' };
            if(!score || typeof score !== "number" || score > 100) return { error: 'Invalid score' };

            return data;
        }
    }
};