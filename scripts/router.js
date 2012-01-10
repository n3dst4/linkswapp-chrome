define([
  'jquery',
  'underscore',
  'backbone',
  'views/example',
  'models/user'
], function($, _, Backbone, exampleView, userModel){

  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction'
    },
    defaultAction: function(actions){
      var user = new userModel;
      var example = new exampleView({ model: user, user_id: '4efd7d3984ce64cd77000002' });
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
