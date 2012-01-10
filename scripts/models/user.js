define([
  'underscore',
  'backbone'
], function(_, Backbone) {

  var userModel = Backbone.Model.extend({
    url: function() {
      return 'http://linkswapp.in/user/' + this.get('_id');
    },
    defaults: {
      _id: undefined,
      name: undefined,
      email: undefined,
      about: undefined,
      contacts: [],
      created: undefined,
      active: true
    }
  });

  return userModel;

});
