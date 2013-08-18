define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
    var CardView = Backbone.View.extend({
        initialize: function() {
            this.template = _.template($('#card-template').html());
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return CardView;
});
