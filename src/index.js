var uniqueRandomArray = require('unique-random-array');
var emots = require('./emots.json');

module.exports = {
	all : emots,
	random : uniqueRandomArray(emots)
};