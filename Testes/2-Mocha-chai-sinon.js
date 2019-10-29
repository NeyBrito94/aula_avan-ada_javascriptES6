//Mocha


const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math();
        assert.equal(math.sum(5,5), 10);
    });
});

class Math{
    sum = function sum() {};
}

module.exports = Math;



const assert = require('assert');
const Math = require('../test/MathClass.js');

describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math();
        assert.equal(math.sum(5,5), 10);
    });
});


class Math{
    sum = function sum() {};
}
module.exports = Math;
