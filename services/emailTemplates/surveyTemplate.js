const keys = require('../../config/keys');

//Takes a survey and returns a string that represents actual HTML we want to show in our email body
module.exports = (survey) => {
    //template literal since it is multi-line
    return `
        <html>
            <body>
                <span style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #BBBBBB;">
                    <div style="text-align: center;">
                        <h3 style="color: #1c70db;">I'd like your input</h3>
                        <p>Please answer the following question:</p>
                        <p>${survey.body}</p>
                        <div>
                            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                        </div>
                        <div>
                            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                        </div>
                    </div>
                </span>
            </body>
        </html>
    `;
};