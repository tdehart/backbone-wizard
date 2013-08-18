define([
    'jquery',
    'underscore',
    'backbone',
    'views/CardView'
], function($, _, Backbone, CardView) {
    var WizardView = Backbone.View.extend({

        events: {
            'click .close': 'close',
            'click .cancel-button': 'close',
            'click .next-button': 'nextStep',
            'click .prev-button': 'prevStep'
        },

        initialize: function() {
            this.template = _.template($('#wizard-template').html());
            this.currentStep = 0;
            this.totalSteps = this.options.steps.length;
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.currentCardContainer = this.$(".current-card-container");
            this.wizardCardHeader = this.$("#wizard-card-header");
            this.wizardCardBody = this.$("#wizard-card-body");
            this.nextStepButton = this.$(".next-button");
            this.prevStepButton = this.$(".prev-button");
            this.progressBar = this.$(".bar");

            this.renderCurrentStep();
            return this;
        },

        renderCurrentStep: function() {
            var currentStep = this.options.steps[this.currentStep];
            if (!this.isFirstStep()) var prevStep = this.options.steps[this.currentStep - 1];
            var nextStep = this.options.steps[this.currentStep + 1];

            this.wizardCardBody.html(currentStep.instructions);
            this.wizardCardHeader.html(currentStep.title);
            this.currentView = currentStep.view;
            this.currentCardContainer.html(this.currentView.render().el);

            this.updateProgressBar();

            if (prevStep) {
                this.prevStepButton.html("Prev").show()
            } else {
                this.prevStepButton.hide();
            };
            if (nextStep) {
                this.nextStepButton.html("Next");
            } else {
                this.nextStepButton.html("Finish");
            };
        },

        updateProgressBar: function() {
            this.progressBar.css("width", ((this.currentStep+1)/this.totalSteps * 100) + '%');
        },

        nextStep: function() {
            //Do validation here
            if (!this.isLastStep()) {
                this.currentStep += 1;
                this.renderCurrentStep();
            } else {
                //Do save here
                this.close();
            };
        },

        prevStep: function() {
            if (!this.isFirstStep()) {
                this.currentStep -= 1;
                this.renderCurrentStep();
            };
        },

        isFirstStep: function() {
            return (this.currentStep == 0);
        },

        isLastStep: function() {
            return (this.currentStep == this.options.steps.length - 1);
        },

        show: function() {
            $(document.body).append(this.render().el);
        },

        close: function() {
            this.remove();
        },
    });

    return WizardView;
});
