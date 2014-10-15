'use strict';

module.exports = function(InsultGenerator) {
  var compliments = [
    'You are supah dupah', 'You are beautiful'
  ];

  InsultGenerator.ComplimentController = Ember.ObjectController.extend({
    thing: function() {
      return 'You are supah dupah';
    },
    newCompliment: function () {
    	return 'You are supah dupah';
			}
			.property()
  });
};

