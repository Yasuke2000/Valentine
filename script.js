document.addEventListener('DOMContentLoaded', function () {
    var noCount = 0;
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
    
    yesButton.addEventListener('click', function () {
        yesButton.classList.add('animated-button');
        noButton.classList.add('bounce-away');
        responseGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseText.textContent = "Ok yay!!! Then we can go on a date.";
        dateOptionsContainer.style.display = 'flex';
    });

    noButton.addEventListener('click', function () {
        if (noCount < noPhrases.length) {
            noButton.textContent = noPhrases[noCount];
            noCount++;
        } else {
            noButton.style.display = 'none';
            responseText.textContent = "Oh, okay :(";
        }
    });

    document.querySelectorAll('.date-option').forEach(function(option) {
        option.addEventListener('click', function() {
            if (this.id === 'pick-date') {
                datePickerContainer.style.display = 'flex';
            } else {
                responseText.textContent = `Great! Let's go to the ${this.textContent}!`;
                dateOptionsContainer.style.display = 'none';
            }
        });
    });

    submitDateButton.addEventListener('click', function() {
        if (datePicker.value) {
            responseText.textContent = `Date set for ${datePicker.value}! Looking forward to it!`;
            datePickerContainer.style.display = 'none';
        } else {
            responseText.textContent = "Please pick a date.";
        }
    });
});
