$(function() {
    var CardView = Backbone.View.extend({
        initialize: function() {
            this.template = _.template($('#card-template').html());
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        show: function() {
            console.log('show');
            $('#wizard-card-body').append(this.render().el);
        },
    });
});
