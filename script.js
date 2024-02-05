document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');
    var responseText = document.getElementById('response-text');
    var dateOptionsContainer = document.getElementById('date-options-container');
    var datePickerContainer = document.getElementById('date-picker-container');
    var datePicker = document.getElementById('date-picker');
    var submitDateButton = document.getElementById('submit-date');
    var responseGif = document.getElementById('response-gif');
    var noPhrases = [
        "No", "Are you sure?", "Really sure?", "Think again!", "Last chance!",
        "Surely not?", "You might regret this!", "Give it another thought!",
        "Are you absolutely certain?", "This could be a mistake!", "Have a heart!",
        "Don't be so cold!", "Change of heart?", "Wouldn't you reconsider?",
        "Is that your final answer?", "You're breaking my heart"
    ];

    // Animation for the Yes button on page load
    responseGif.onload = function() {
        responseGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseText.textContent = "Ok yay!!! Then we can go on a date.";
        yesButton.style.animation = 'bounce 0.5s';
        yesButton.style.animationIterationCount = 'infinite';
    };

    var noCount = 0;
    noButton.addEventListener('click', function () {
        if (noCount < noPhrases.length) {
            responseText.textContent = noPhrases[noCount];
            noCount++;
        } else {
            responseText.textContent = "Oh, okay :(";
            noButton.style.animation = 'bounceAway 0.5s';
            noButton.style.animationIterationCount = 'infinite';
        }
    });

    var dateOptionRadios = document.querySelectorAll('input[type="radio"][name="date-option"]');
    var pickDateLabel = document.getElementById('pick-date-label');

    submitDateButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the form from submitting
        var selectedDateOption = document.querySelector('input[type="radio"][name="date-option"]:checked');
        if (selectedDateOption && selectedDateOption.value === "Pick a Date" && datePicker.value) {
            responseText.textContent = `Date set for ${datePicker.value}! Looking forward to it!`;
            dateOptionsContainer.style.display = 'none';
            datePickerContainer.style.display = 'none';
        } else if (selectedDateOption) {
            responseText.textContent = `Great! Let's go to ${selectedDateOption.value}!`;
            dateOptionsContainer.style.display = 'none';
        } else {
            responseText.textContent = "Please select a date option.";
        }
    });
});
