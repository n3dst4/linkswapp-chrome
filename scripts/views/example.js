define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/example.html'
], function($, _, Backbone, exampleTemplate){

  var exampleView = Backbone.View.extend({
    el: $('body'),
    render: function(){
      this.el.html(exampleTemplate);
    }
  });

  return new exampleView;

});
