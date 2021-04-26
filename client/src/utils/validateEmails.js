// from emailregex.com
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

module.exports = (emails) => {
  const invalidEmails = emails
    .split(',')
    .map((email) => email.trim())
    // capture emails that fail the test
    .filter((email) => !re.test(email))
    // ignore any empty strings after trailing commas
    .filter((email) => email !== '');
  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }
  return;
};
