"use strict";

import {expect,assert} from 'chai';
import {all, random , parse , get, Dom }  from './index.js';

describe('Emotsjs' ,() => {
	describe('all' ,() => {
		it('should be an array of strings' ,() => {
			expect(all()).to.satisfy(isArrayOfString);

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
		let randomItem = random();
		expect(all()).to.include(randomItem);
	});

	it('should return an array of random items if passed a number',() => {
		let randomItems = random(3);
		expect(randomItems).to.have.length(3);
		randomItems.forEach((item) => {
			expect(all()).to.include(item);
		});
	});

});

describe('Get', () => {

	it('should return a item by index from emotsjs.all', () => {
		let item = get('running');
		assert(item,'🏃');
	});

	it('should return a random article , because passing a rate that does not exist from emots.all' , () => {
		let item = get('no-exist');
		let randomItem = all();
		expect(randomItem).to.include(item);
	});

});

describe('Parse' , () => {

	it('Should find and replace the substring for emots' , () => {
		let message = 'hello, download emotsjs :runner:';
		let eparse   = parse(message);
		assert(eparse,'hello, download emotsjs 🏃');
	});

});


describe('Emojione native unicode + shortnames', () => {
	it('Should return emoji image' , () => {
		let message = 'hello, download emotsjs :runner:';
		let eparse   = Dom(message);
		assert(eparse,'hello, download emotsjs <img class="emojione" alt="🏃" src="//cdn.jsdelivr.net/emojione/assets/png/1F3C3.png?v=1.2.4"/>');
	});
});
