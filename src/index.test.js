var expect   = require('chai').expect;
var emotsjs  = require('./index.js');

describe('Emotsjs' , function(){
	describe('all' , function(){
		it('should be an array of strings' , function(){
			expect(emotsjs.all).to.satisfy(isArrayOfString);

			function isArrayOfString(array){
				return array.every(function(item){
					return typeof item === 'string';
				});
			}
		});
	});
});


describe('Random', function(){
	it('should return a random item from emotsjs.all', function(){
		var randomItem = emotsjs.random();
		expect(emotsjs.all).to.include(randomItem);
	});

	it('should return an array of random items if passed a number', function(){
		var randomItems = emotsjs.random(3);
		expect(randomItems).to.have.length(3);
		randomItems.forEach(function(item){
			expect(emotsjs.all).to.include(item);
		});
	});

});