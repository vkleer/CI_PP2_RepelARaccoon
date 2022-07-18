/** 
 * Collects the data from
 */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('report-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // Create a random 5 digit number for co
        this.report_number.value = Math.random() * 100000 | 0;
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
    let formSubmitMessage =`
    <section class="section">
        <h1>Thank you for your report!</h1>
        <p>Thank you for taking the time to submit a bug report. We will provide you with an update once the
        bug has been fixed!</p>
        <button class="btn"><a href="index.html">Back to game</a></button>
    </section>`; 
    document.getElementById('contact-section').innerHTML = formSubmitMessage;
}