const keys = require('../../config/keys');

//Takes a survey and returns a string that represents actual HTML we want to show in our email body
module.exports = (survey) => {
    //template literal since it is multi-line
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>I'd like your input</h3>
                    <p>Please answer the following question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};