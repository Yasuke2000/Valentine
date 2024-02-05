document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');
    var responseText = document.getElementById('response-text');
    var dateForm = document.getElementById('date-form');
    var datePicker = document.getElementById('date-picker');
    var submitDateButton = document.getElementById('submit-date');
    var responseGif = document.getElementById('response-gif');
    var noPhrases = ["No", "Are you sure?", "Really sure?", ...]; // Add the rest of the phrases

    yesButton.style.animation = 'bounce 0.5s infinite';

    yesButton.addEventListener('click', function () {
        responseGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseText.textContent = "Ok yay!!! Then we can go on a date.";
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        dateForm.classList.remove('hidden');
    });

    noButton.addEventListener('click', function () { /* No button logic */ });

    // Logic to show submit button when both a date option and a date are selected
    dateForm.addEventListener('change', function () {
        var selectedDateOption = document.querySelector('input[name="date-option"]:checked');
        if (selectedDateOption && datePicker.value) {
            submitDateButton.classList.remove('hidden');
        }
    });

    // Logic for submitting the form
    dateForm.addEventListener('submit', function (event) {
        event.preventDefault();
        responseText.textContent = `Date set for ${datePicker.value}! Looking forward to ${selectedDateOption.value}!`;
        dateForm.classList.add('hidden');
        // Netlify form submission logic here
    });
});
