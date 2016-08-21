var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
		this.game.load.image('blue', 'assets/blue.png');
		this.game.load.image('green', 'assets/green.png');
		this.game.load.image('red', 'assets/red.png');
		this.game.load.image('yellow', 'assets/yellow.png');
	},

	create: function(){
		this.game.state.start("Main");
	}
}