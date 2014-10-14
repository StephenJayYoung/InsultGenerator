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
});

describe('InsultController', function() {
  it('has a method', function() {
    var controller = applicationContainer().lookup('controller:insult');
    expect(controller.thing()).to.eql('thing');
  });
});
