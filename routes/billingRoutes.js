const keys =require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey)

module.exports = app => {
    //Route handler for post requests token made to Stripe API to finalize charge and update credits
    app.post('/api/stripe', async (req, res) => {
        //Error handling if user is not logged in
        if (!req.user) {
            return res.status(401).send({ error: 'You must log in' })
        }

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