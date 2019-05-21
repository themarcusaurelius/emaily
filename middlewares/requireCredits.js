//Next is a function we call when our middleware is finished running
module.exports = (req, res, next) => {
    if (!req.user.credits < 1) {
        return res.status(403).send({ error: 'Not enough credits!' })
    };
    //If everthing looks good then continue on
    next();
};