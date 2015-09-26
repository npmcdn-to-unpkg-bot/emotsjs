"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _emotsJson = require('./emots.json');

var _emotsJson2 = _interopRequireDefault(_emotsJson);

var getRandomItem = (0, _uniqueRandomArray2['default'])(_emotsJson2['default']);

module.exports = {
	all: _emotsJson2['default'],
	random: random
};

function random(number) {
	if (number === undefined) {
		return getRandomItem();
	} else {
		var randomItems = [];

		for (var i = 0; i < number; i++) {
			randomItems.push(getRandomItem());
		}

		return randomItems;
	}
}
