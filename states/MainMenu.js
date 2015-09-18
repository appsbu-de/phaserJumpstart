RENAME_ME.MainMenu = function (game) {
};

RENAME_ME.MainMenu.prototype = {

	create: function () {
		this.game.stage.backgroundColor = '#ffffff';
	},

	play: function() {
		this.state.start('Game');
	},

	update: function () {

	}
};
