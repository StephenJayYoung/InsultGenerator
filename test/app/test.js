'use strict';

describe('app', function() {
  it('has index stuff', function() {
    visit('/');
    expect(find('.index-stuff').length).to.eql(1);
  });
});
