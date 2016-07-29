"use strict";

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.all = all;
exports.random = random;
exports.get = get;
exports.parse = parse;
exports.Dom = Dom;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _emotsJson = require('./emots.json');

var _emotsJson2 = _interopRequireDefault(_emotsJson);

var _emojione = require('emojione');

var _emojione2 = _interopRequireDefault(_emojione);

var getRandomItem = (0, _uniqueRandomArray2['default'])(all());

function all() {

	var all = Object.keys(_emotsJson2['default']);
	return all.map(function (item) {
		return _emotsJson2['default'][item];
	});
}

function random() {
	var number = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	var randomItems = [];

	for (var i = 0; i < number; i++) {
		randomItems.push(getRandomItem());
	}

	return randomItems;
}

function get(emot) {
	return _emotsJson2['default'][emot] ? _emotsJson2['default'][emot] : getRandomItem();
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

function Dom(string) {

	return _emojione2['default'].toImage(string);
}
