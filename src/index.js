"use strict";

import uniqueRandomArray from 'unique-random-array';
import emots             from './emots.json';

let getRandomItem     = uniqueRandomArray(emots);

module.exports = {
	all : emots,
	random : random
}


function random(number){
	if(number === undefined){
		return getRandomItem();
	}
	else{
		let randomItems = [];

		for (let i = 0; i <number ;i++) {
			randomItems.push(getRandomItem());
		}

		return randomItems;
	}
}