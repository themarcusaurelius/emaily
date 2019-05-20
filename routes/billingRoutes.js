const keys =require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    //Route handler for post requests token made to Stripe API to finalize charge and update credits
    //Not invoked because it is a reference to a function for express to run internally
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5.00 for 5 credits',
            source: req.body.id
        });
        //Adds Credits and Updates User
        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};