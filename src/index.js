"use strict";

import uniqueRandomArray from 'unique-random-array';
import emots             from './emots.json';

let getRandomItem     = uniqueRandomArray(all());

export default {
	all,
	random,
	get,
	parse
};


function all(){


	let all = Object.keys(emots);

	all = all.map((item) => {
			return emots[item];
	});

	return all;
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

function get(emot){

	let find = emots[emot];

	if(find === undefined){
		return getRandomItem();
	}

	return find;

}

function parse(string){
	const re = /\:(.*?)\:/i;
	let   str = string;
	let   m;

	while ((m = re.exec(str)) !== null) {
	    str = str.replace(m[0],get(m[1]));
	}

	return str;
}
