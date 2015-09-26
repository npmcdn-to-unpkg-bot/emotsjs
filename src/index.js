var uniqueRandomArray = require('unique-random-array');
var emots             = require('./emots.json');
var getRandomItem     = uniqueRandomArray(emots);

module.exports = {
	all : emots,
	random : random
};


function random(number){
	if(number === undefined){
		return getRandomItem();
	}else{
		var randomItems = [];

		for (var i = 0; i <number ;i++) {
			randomItems.push(getRandomItem());
		}

		return randomItems;

	}
}