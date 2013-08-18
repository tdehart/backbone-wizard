// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/WizardView',
  'views/CardView'
], function($, _, Backbone, WizardView, CardView){
  var initialize = function() {
    var wizardModel = new Backbone.Model({ });
    var cardModel1 = new Backbone.Model({ title: 'Example Card1', body: 'Card Body 1' });
    var cardModel2 = new Backbone.Model({ title: 'Example Card2', body: 'Card Body 2' });
    var cardModel3 = new Backbone.Model({ title: 'Example Card3', body: 'Card Body 3' });

    var steps = [
            {
              step_number:       1,
              title:             "Title of Step 1",
              instructions:      "Instructions for step 1",
              view:              new CardView({ model: cardModel1 })
            },
            {
              step_number:       2,
              title:             "Title of Step 2",
              instructions:      "Instructions for step 2",
              view:              new CardView({ model: cardModel2 })
            },
            {
              step_number:       3,
              title:             "Title of Step 3",
              instructions:      "Instructions for step 3",
              view:              new CardView({ model: cardModel3 })
            }
          ];

    $('#show-wizard').click(function() {
      var view = new WizardView({ 
        model: wizardModel,
        steps: steps
      });
      view.show();
    });
  }

  return {
    initialize: initialize
  };
});