var graphicsSystem = require('./systems/graphics');
var bird = require('./entities/pipe');

var FlappyPipe = function() {
    this.entities = [new pipe.Pipe()];
    this.graphics = new graphicsSystem.GraphicsSystem(this.entities);
};

FlappyPipe.prototype.run = function() {
    this.graphics.run();
};

exports.FlappyPipe = FlappyPipe;