define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){
    var WizardView = Backbone.View.extend({

        events: {
            'click .close': 'close',
            'click .close-button' : 'close',
            'click .next-button' : 'next',
            'click .prev-button' : 'prev'
        },

        testVar: 'test',

        initialize: function() {
            this.template = _.template($('#wizard-template').html());
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        show: function() {
            $(document.body).append(this.render().el);
        },

        close: function() {
            this.remove();
        },

        next: function() {
            var cardModel = new Backbone.Model({ title: 'Example Card', body: 'Hello Card' });
            var card = new CardView({ model: cardModel });
            card.show();
        }
           
    });

    return WizardView;

    // var model = new Backbone.Model({ title: 'Example Modal', body: 'Hello World' });

    // $('#show-wizard').click(function() {
    //     var view = new WizardView({ model: model });
    //     view.show();
    // });
});
