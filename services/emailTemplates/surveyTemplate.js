//Takes a sruvey and returns a string that represents actual HTML we want to show in our email body
module.exports = (survey) => {
    return '<div>' + survey.body + '</div>'
};