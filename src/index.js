"use strict";

import uniqueRandomArray from 'unique-random-array';
import emots             from './emots.json';
import emojione          from 'emojione';

const getRandomItem     = uniqueRandomArray(all());

export function all(){
	return Object.values(emots);
}


export function random(number = 1){

		const generateRandom = (prev, next , i) => {
			if(i < number){
				prev.push(getRandomItem());
			}
			return prev;
		};

		return Object.values(emots).reduce(generateRandom,[]);

}

export function get(emot){
	return emots[emot] ? emots[emot] : getRandomItem();
}

export function parse(str){
	const reExp = /\:(.*?)\:/i;
	let   m;

	while ((m = reExp.exec(str)) !== null) {
	    str = str.replace(m[0],get(m[1]));
	}

	return str;
}

export function Dom(string){
	return emojione.toImage(string);
}
