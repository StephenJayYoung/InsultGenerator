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
  	expect(find('span.insult').length).to.eql(1);
  });
});
