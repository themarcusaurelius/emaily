const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient')

const surveySchema = new Schema ({
    title: String, 
    body: String, 
    subject: String,
    //Embedding a sub-document collection list of recipients
    recipients: [RecipientSchema],
    //Records the total amount that a recipient votes yes of now
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    //Tells surveySchema that every survey belongs to a particular user. "_" indicates it is a reference field to set up a relationship between a schema and user
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    dateSent: Date, 
    lastResponded: Date
});

//Telling mongoose we want to create a new collection
mongoose.model('surveys', surveySchema)