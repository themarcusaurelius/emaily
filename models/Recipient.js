const mongoose = require('mongoose');
const { Schema } = mongoose; 

const recipientSchema = new Schema({
    email: String,
    //Initially Set tO False
    responded: { type: Boolean, default: false }
});

module.exports = recipientSchema