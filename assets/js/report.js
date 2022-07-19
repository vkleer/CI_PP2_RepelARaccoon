/** 
 * Collects data from the form and sends it to the email address specified on EmailJS
 */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('report-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.init("2uEyqQHZW4FhfzgDy");
        emailjs.sendForm('repel-a-raccoon', 'template_raccoon', this)
            .then(function () {
                // Email was successfully sent
                console.log('Email sent successfully!');
            }, function (error) {
                // Email was not sent
                console.log('Unable to send email - ', error);
            });
        formSubmitted();
    });
});

/**
 * Updates the HTML of the 'contact-section' section to thank the user for submitting the form
 */
function formSubmitted() {
    let formSubmitMessage =
    `<h1>Thank you for your report!</h1>
    <p>Thank you for taking the time to submit a bug report. We will provide you with an update once the
    bug has been fixed!</p>
    <a href="index.html" class="btn return-btn">Go back</a>`; 
    document.getElementById('contact-section').innerHTML = formSubmitMessage;
}