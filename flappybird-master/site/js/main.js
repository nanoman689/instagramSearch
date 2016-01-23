var flappyBird = require('./flappy_bird');
var flappyPipe = require('./flappy_pipe');

document.addEventListener('DOMContentLoaded', function() {
    var app = new flappyBird.FlappyBird(), new flappyPipe.FlappyPipe();
    app.run();
});