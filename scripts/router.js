define([
  'jquery',
  'underscore',
  'backbone',
  'views/example'
], function($, _, Backbone, exampleView){

  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction'
    },
    defaultAction: function(actions){
      exampleView.render();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };

});
