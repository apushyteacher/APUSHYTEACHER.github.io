// Define our main state
var main = {
  preload: function() {
    // This function will be executed at the beginning     
        // That's where we load the game's assets
    game.load.image("paddle", "assets/paddle.png");
  },

  create: function() { 
    // This function is called after the preload function     
        // Here we set up the game, display sprites, etc. 
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursor = game.input.keyboard.createCursorKeys();
        this.paddle = game.add.sprite(200, 400, "paddle");
        game.physics.arcade.enable(this.paddle);
        this.paddle.body.immovable = true;
  },

  update: function() {
    // This function is called 60 times per second    
        // It contains the game's logic  
      if (this.cursor.right.isDown)
          this.paddle.body.velocity.x = 350;
      else if (this.cursor.left.isDown)
          this.paddle.body.velocity.x = -350;
      else
          this.paddle.body.velocity.x = 0;
  },
};

// Initialize Phaser, and start our 'main' state 
var game = new Phaser.Game(400, 450, Phaser.AUTO, 'gameDiv');
game.state.add('main', main);
game.state.start('main')