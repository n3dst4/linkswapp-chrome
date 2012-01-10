define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/example.html'
], function($, _, Backbone, exampleTemplate){

  var exampleView = Backbone.View.extend({
    el: $('body'),
    initialize: function() {
      _.bindAll(this, 'render');

      this.model.set({ _id: this.options.user_id });
      this.model.fetch({
        success: this.render,
        error: function(model, response) {
          console.log('ERROR FETCHING MODEL');
          console.log(model);
          console.log(response);
        }
      });
    },
    render: function() {
      this.el.html( _.template(exampleTemplate, this.model) );
      return this;
    }
  });

  return exampleView;

});
