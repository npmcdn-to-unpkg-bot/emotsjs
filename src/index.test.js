"use strict";

import {expect,assert} from 'chai';
import emotsjs  from './index.js';

describe('Emotsjs' ,() => {
	describe('all' ,() => {
		it('should be an array of strings' ,() => {
			expect(emotsjs.all()).to.satisfy(isArrayOfString);

			function isArrayOfString(array){
				return array.every((item) => {
					return typeof item === 'string';
				});
			}
		});
	});
});


describe('Random', () => {
	
	it('should return a random item from emotsjs.all',() => {
		let randomItem = emotsjs.random();
		expect(emotsjs.all()).to.include(randomItem);
	});

	it('should return an array of random items if passed a number',() => {
		let randomItems = emotsjs.random(3);
		expect(randomItems).to.have.length(3);
		randomItems.forEach((item) => {
			expect(emotsjs.all()).to.include(item);
		});
	});

});

describe('Get', () => {

	it('should return a item by index from emotsjs.all', () => {
		let item = emotsjs.get('running');
		assert(item,'🏃');
	});

	it('should return a random article , because passing a rate that does not exist from emots.all' , () => {
		let item = emotsjs.get('no-exist');
		let randomItem = emotsjs.all();
		expect(randomItem).to.include(item);
	});

});