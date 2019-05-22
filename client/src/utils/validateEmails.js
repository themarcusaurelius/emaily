//Email validator from Regex.com
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//Function splits emails by comma, maps over every single string(email) in array, every individual email returns trimmed. Filter validates whether email is true or false with regex.
export default (emails) => {
    emails = emails.replace(/,\s*$/, '');
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => re.test(email) === false)
    
    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`;
    }

    return;
};