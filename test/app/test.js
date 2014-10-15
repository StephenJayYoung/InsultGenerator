'use strict';

describe('app', function() {
  it.skip('has index stuff', function() {
    visit('/');
    expect(find('.index-stuff').length).to.eql(1);
  });

  it('routes to an insult', function() {
  	// find() is like $()
  	// the argument to find is a CSS selector
    visit('/insult');
  	expect(find('.insult').length).to.eql(1);
  });

  it.skip('routes to a compliment', function() {
		// find() is like $()
		// the argument to find is a CSS selector
	  visit('/compliment');
		expect(find('.compliment').length).to.eql(1);
  });

  it('randomly generates a compliment or insult', function() {
		// // find() is like $()
		// // the argument to find is a CSS selector
	  // visit('/compliment');
		// expect(find('.compliment').length).to.eql(1);
  });
});

describe('InsultController', function() {
  it('has a method', function() {
    var controller = applicationContainer().lookup('controller:insult');
    expect(controller.thing()).to.eql('suck it');
  });
});

describe('InsultGenerator', function() {
  it('generates a random insult', function() {

    expect(()).to.eql('suck it');
  });
});
