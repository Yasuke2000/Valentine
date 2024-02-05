document.addEventListener('DOMContentLoaded', function () {
    var noCount = 0;
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');
    var responseText = document.getElementById('response-text');
    var dateOptionsContainer = document.getElementById('date-options-container');
    var datePickerContainer = document.getElementById('date-picker-container'); // Added
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
        responseGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseText.textContent = "Ok yay!!! Then we can go on a date.";
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        dateOptionsContainer.style.display = 'block';
        datePickerContainer.classList.remove('hidden'); // Show the date picker container
    });

    noButton.addEventListener('click', function () {
        if (noCount < noPhrases.length) {
            noButton.textContent = noPhrases[noCount];
            noCount++;
        } else {
            noButton.style.display = 'none';
            responseText.textContent = "Oh, okay :(";
        }

        // Add animation to move the button and make it harder to click
        noButton.classList.add('button-animation');
    });

    document.querySelectorAll('.date-option').forEach(function(option) {
        option.addEventListener('click', function() {
            if (this.id === 'pick-date') {
                datePickerContainer.classList.remove('hidden'); // Show the date picker container
            } else {
                responseText.textContent = `Great! Let's go to the ${this.textContent}!`;
                dateOptionsContainer.style.display = 'none';
            }
        });
    });

    submitDateButton.addEventListener('click', function() {
        if (datePicker.value) {
            responseText.textContent = `Date set for ${datePicker.value}! Looking forward to it!`;
            dateOptionsContainer.style.display = 'none';
            datePickerContainer.style.display = 'none';
        } else {
            responseText.textContent = "Please pick a date.";
        }
    });
});
