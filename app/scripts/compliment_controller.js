'use strict';

module.exports = function(InsultGenerator) {
  var insults = [
    'You are supah dupah', 'You are beautiful'
  ];

  InsultGenerator.InsultController = Ember.ObjectController.extend({
    thing: function() {
      return 'You are supah dupah'
    },
    newInsult: function () {
    	return "You are supah dupah";
			}
			.property()
  });
};
