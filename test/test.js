'use strict';

var expect = require('chai').expect;
var chai = require('chai')
	, chaiHttp = require('chai-http');

chai.use(chaiHttp);


describe('http-server.js', function(){
	describe('GET /greet', function(){
		before(function(){
			chai.request('localhost:3000')
	    	.get('/greet')
	    	.query('/kumji');
	    });
	  	it('should be running', function(res){
	  	expect(res).to.eql('/greet/kumji');
	  	});
	  
	});


	describe('POST /greet', function() {
		var response;
    	var error;
		before(function(done){
     		chai.request('localhost:3000')
        	.post('/greet')
        	.send({name: 'kumji'})
        	.end(function(err, res){
         	console.log('response:', res); // this is the response
          	error = err;
          	response = res;
          	done();
        	});
    	});
    	it('shoud not return an error', function(){
     	 expect(error).to.eql(null);
    	});
    	it('should be json', function(res){
    		expect(res).to.be.json;
    	})
	});
});



/*


describe('http-server.js', function(){
  describe('GET /greet', function(){
    var response;
    var error;
    before(function(done){
      chai.request('localhost:3000')
        .post('/greet')
        .send({name: 'kumji'})
        .end(function(err, res){
          console.log('response:', res); // this is the response
          error = err;
          response = res;
          done();
        });
    });
    it('shoud not return an error', function(){
      expect(error).to.eql(null);
    });
    it('should have somehting', function(){
      expect(response.body.msg).to.eql('hello slug');
    });
  });
});*/