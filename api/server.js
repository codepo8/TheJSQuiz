const Hapi = require('hapi');
const mongoose = require('mongoose');
const helpers = require('./helpers');

// Mongoose connection
mongoose.connect('mongodb://root:root@ds147070.mlab.com:47070/jsquiz');
const models = require('./models')(mongoose);

// Create a new server
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Add Questions
server.route({
    method: ['POST'],
    path: '/questions',
    handler: function (request, reply) {
        const data = request.payload;
        let valid = helpers.validate.question(data);
        if(valid.hasOwnProperty('error')) return reply(valid.error);

        let { title, snippet, answers, difficulty } = data;
        const question = new models.Question({ title, snippet, answers, difficulty });

        question.save(function (err) {
            if(err) reply(`Error inserting user: ${err}.`);
            reply('Successfully added question');
        });
    }
});

// Get Questions
server.route({
   method: 'GET',
    'path': '/questions/{difficulty?}',
    handler: function (request, reply) {
        const difficulty = request.params.difficulty ? encodeURIComponent(request.params.difficulty) : '';
        const results = difficulty ? models.Question.find({difficulty}) : models.Question.find();
        return reply(results);
    }
});

// Add result to LeaderBoard
server.route({
    method: ['POST'],
    'path': '/leaderboards',
    handler: function (request, reply) {
        console.log(request.payload);
        //const data = JSON.parse(request.payload);
        // let valid = helpers.validate.addScore(data);
        // if(valid.hasOwnProperty('error')) return reply(valid.error);
        // console.log('Save score');
    }
});

// Start the server
server.start(err => {
   if(err) throw err;
   console.log(`Server running at: ${server.info.uri}`);
});

