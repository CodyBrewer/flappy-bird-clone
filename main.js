import Phaser from "phaser";

var mainState = {
  preload: function() {
    // This function will be executed at the beginning
    // This is where we will load the images and sounds
  },
  create: function() {
    // This function is called after the preload function
    // Here we set up the game, display sprites, etc
  },
  update: function() {
    // This function is called 60 times per second
    // This is where the game's logic is contained
  }
};

const game = new Phaser.Game(400, 490);

game.state.add("main", mainState);

game.state.start("main");
