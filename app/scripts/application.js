'use strict';

var InsultGenerator = window.InsultGenerator = Ember.Application.create();

InsultGenerator.Router.map(function() {
	this.route('compliment')
  this.route('insult')
});

InsultGenerator.IndexRoute = Ember.Route.extend({
  model: function() {
    return [];
  }
});


var insults = require('./insults');
console.log(insults);
