// utils/brevoEmail.js
const brevo = require('@getbrevo/brevo');

// Initialize the Brevo API client
let defaultClient = brevo.ApiClient.instance;
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = "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";

// Function to send a transactional email
async function sendVerificationEmail(userEmail, template, actionLink) {
    try {
        let apiInstance = new brevo.TransactionalEmailsApi();
        let sendSmtpEmail = new brevo.SendSmtpEmail();

        sendSmtpEmail.subject = "Verify your email";
        sendSmtpEmail.htmlContent = template;

        sendSmtpEmail.sender = { "name": "Sean's Legacy", "email": "support@seanslegacy.org" };
        sendSmtpEmail.to = [
            { "email": userEmail }
        ];
        // TODO: create a no-reply email address
        sendSmtpEmail.replyTo = { "email": "no-reply@seanslegacy.org" };
        // sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
        // sendSmtpEmail.params = { "parameter": "My param value", "subject": "common subject" }

        // // Send the transactional email
        const response = await apiInstance.sendTransacEmail(sendSmtpEmail);

        console.log('API called successfully. Returned data:',
            response.data
        );
        // return response.data;
    } catch (error) {
        console.error('Error sending transactional email:', error);
        throw error;
    }
}

module.exports = { sendVerificationEmail };
