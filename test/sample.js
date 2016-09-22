var assert = require('chai').assert;

var uppercase = require('../routes/moduleForTesting');

describe('testing first module for uppercase',function(){
	it('should return uppercase values', function(){
		//assert(uppercase('hello'),'HELLO');
		assert.equal(uppercase('test'),'test123');
	});
});