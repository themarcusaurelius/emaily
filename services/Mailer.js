const sendgrid = require('sendgrid');
//helper object that helps us create the mailer
const helper = sendgrid.mail;
const keys = require('../config/keys')

class Mailer extends helper.Mail {
    //constructor Allows us to do initia; setup and initialization - called automatically and can be modified in the future
    constructor({ subject, recipients }, content) {
        //ES2015 - super() makes sure any constructor defined on Mail class gets executed
        super();

        //Sendgrid object used to communicate this mailer off to the sendgrid API
        this.sgApi = sendgrid(keys.sendGridKey)
        
        this.from_email = new helper.Email('no-reply@email.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        //Makes sure body gets added as content to mailer - addContent() is a helper method of Mail object
        this.addContent(this.body);
        //Enables click tracking inside email
        this.addClickTracking();
        //Makes sure recipients gets added to mailer
        this.addRecipients();
    }

    //Helper function to extract just email addresses from recipient object in our sub-document collection
    formatAddresses(recipients) {
        //es6 destructuring to pull off email property and format it correctly
        return recipients.map(({ email }) => {
            return new helper.Email(email)
        });
    }

    //This is how sendgrid documentation says to setup
    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    //Processes list of recipients
    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    //Function used to send off mailer to sendgrid - Async/Await since it is an API call
    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()       
        });

        const response = await this.sgApi.API(request);
        return response;
    }
};

module.exports = Mailer;


