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

  it('has index stuff', function() {
    visit('/');
    fillIn('input#name', 'Kali');
    click('a.insult');
    andThen(function() {
      expect(currentRouteName()).to.eql('insult');
      expect(find('span.insult').text()).to.exist;
    });
  });

  it('routes to an insult', function() {
    visit('/insult');
  	expect(find('span.insult').length).to.eql(1);
  });

  it('routes to a compliment', function() {
	  visit('/compliment');
		expect(find('span.compliment').length).to.eql(1);
  });

  it.skip('randomly generates an insult', function() {
  	// when you run random insult function, it takes
    // an array and gives you back one insult
    // which is a string
    visit('/something-that-is-a-real-path');
    click('a.insult');
    andThen(function() {
      expect(currentRouteName()).to.eql('insult');
      // var arrayOfInsults = ['stinky monkey','bad speller'];
      // var randomInsult = arrayOfInsults.math.floor
      var text = find('css-selector-for-whever-the-insult-goes').text();
      var possibilities = ['insult one', 'insult two']; // TODO: make this any possible insult
      expect(possibilities.indexOf(text)).to.not.eql(-1);
    });
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
