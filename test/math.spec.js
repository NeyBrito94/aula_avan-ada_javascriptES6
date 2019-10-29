/*
const assert = require('assert');
const Math = require('/Users/782405/projeto-curso-git/aula_avan-ada_javascriptES6/math.js');

let value = 0;

describe('Math class', function(){
    //hooks
    beforeEach(function() {
        value = 0;        
    })
    it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(3000);
        
        value = 5;
        math.sum(value, 5, value => {
            assert.equal(value, 10);
            done();            
        });      
    });    
    it('Multiply two numbers', function() {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0); 
    });
});


describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math();

        assert.equal(math.sum(5,5), 10);      
    });
});

//done();
//.only executa somente um ou skip pula e deixa pendente

//BIBLIOTECA CHAI

const assert = require('assert');
const Math = require('/Users/782405/projeto-curso-git/aula_avan-ada_javascriptES6/math.js');
const expect = require('chai').expect;

let value = 0;

describe('Math class', function(){
    //hooks
    beforeEach(function() {
        value = 0;        
    })
    it('Sum two numbers', function(){
        const math = new Math();
        this.timeout(3000);
        
        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10);          
        });      
    });    
    it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Ney Brito'
        };
        expect(obj).to.have.property('name').equal('Ney Brito');
        //equal faz comparação dos tipos do objt
        //deep.equal faz comparação dos valores dos objeto
        //expect(math.multiply(value, 5)).to.equal(0);

    });
});
*/

//SINON
const assert = require('assert');
const Math = require('/Users/782405/projeto-curso-git/aula_avan-ada_javascriptES6/math.js');
const expect = require('chai').expect;
const sinon =  require('sinon').expect;

let value = 0;

describe('Math class', function(){
    //hooks
    beforeEach(function() {
        value = 0;        
    })
    it('Sum two numbers', function(){
        const math = new Math();
        this.timeout(3000);
        
        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10);          
        });      
    });    
    it('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Ney Brito'
        };
        expect(obj).to.have.property('name').equal('Ney Brito');
    });

    it.only('Calls req with sum index values'), function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.args[0]).to.equal('index');
    }
});