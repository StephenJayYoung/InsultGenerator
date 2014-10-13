'use strict';

var InsultGenerator = window.InsultGenerator = Ember.Application.create();

InsultGenerator.Router.map(function() {
  // put your routes here
});

InsultGenerator.IndexRoute = Ember.Route.extend({
  model: function() {
    return [];
  }
});


var insults = require('./insults');
console.log(insults);
