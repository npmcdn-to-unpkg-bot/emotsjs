"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _emotsJson = require('./emots.json');

var _emotsJson2 = _interopRequireDefault(_emotsJson);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var getRandomItem = (0, _uniqueRandomArray2['default'])(all());

module.exports = {
	all: all,
	random: random,
	get: get,
	parse: parse
};

function all() {

	var all = [];

	_lodash2['default'].forEach(_emotsJson2['default'], function (v, i) {
		all.push(v);
	});

	return all;
}

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

function get(emot) {

	var find = _emotsJson2['default'][emot];

	if (find === undefined) {
		return getRandomItem();
	}

	return find;
}

function parse(string) {
	var re = /\:(.*?)\:/i;
	var str = string;
	var m = undefined;

	while ((m = re.exec(str)) !== null) {
		str = str.replace(m[0], get(m[1]));
	}

	return str;
}
