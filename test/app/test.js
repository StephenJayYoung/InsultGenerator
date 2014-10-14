'use strict';

describe('app', function() {
  it.skip('has index stuff', function() {
    visit('/index');
    expect(find('.index-stuff').length).to.eql(1);
  });
  // when you click on insult it should load an insult
  it.skip('routes to a insult', function() {
  visit('./insults');
  expect(find('./insults').length).to.eql(1);
	});
});
