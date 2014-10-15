'use strict';

describe('app', function() {
  it('has index stuff', function() {
    visit('/');
    fillIn('input#name', 'Kali');
    click('a.insult');
    andThen(function() {
      expect(currentRouteName()).to.eql('insult');
      expect(find('span.insult').text()).to.match(/tus zapatos/);
    });
  });

  it.skip('routes to an insult', function() {
  	// find() is like $()
  	// the argument to find is a CSS selector
    visit('/insult');
  	expect(find('.insult').length).to.eql(1);
  });

  it('routes to a compliment', function() {
		// find() is like $()
		// the argument to find is a CSS selector
	  visit('/compliment');
		expect(find('.compliment').length).to.eql(1);
  });

  it.skip('randomly generates a compliment or insult', function() {
		// // find() is like $()
		// // the argument to find is a CSS selector
	  // visit('/compliment');
		// expect(find('.compliment').length).to.eql(1);
  });
});

describe('InsultController', function() {
  it.skip('has a method', function() {
    var controller = applicationContainer().lookup('controller:insult');
    expect(controller.thing()).to.eql('suck it');
  });
});

// describe('InsultGenerator', function() {
//   it('generates a random insult', function() {

//     expect(()).to.eql('');
//   });
// });
