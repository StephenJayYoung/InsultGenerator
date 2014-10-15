'use strict';

module.exports = function(InsultGenerator) {
  var insults = [
    'Your mom', 'Your face'
  ];

  InsultGenerator.InsultController = Ember.ObjectController.extend({
    thing: function() {
      return 'suck it';
    },
    newInsult: function () {
    	return "tus zapatos hueles muy malos";
			}
			.property()
  });
};

