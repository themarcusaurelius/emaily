const passport = require('passport');

module.exports = app => {
    //Route handler to handle passport authentication flow
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //Route handler to handle if user visits /auth/google/callback
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'),
        //Redirects after successfull User Authentication
        (req, res) => {
           res.redirect('/surveys');
        }
    );

    //Route handler for logging out
    app.get('/api/logout', (req,res) => {
        req.logout();
        //Redirects after logout back to landing
        res.redirect('/');
    });
    
    //GET Request route handler to get access to current user logging in.
    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    });
};
