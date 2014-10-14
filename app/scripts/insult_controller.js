'use strict';

module.exports = function(InsultGenerator) {
  var insults = [
    'Your mom', 'Your face'
  ];

  InsultGenerator.InsultController = Ember.ObjectController.extend({
    thing: function() {
      return 'thing';
    }
  });
};

