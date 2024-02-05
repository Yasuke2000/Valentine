document.addEventListener('DOMContentLoaded', function () {
    var noCount = 0;
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');
    var responseText = document.getElementById('response-text');
    var dateOptionsContainer = document.getElementById('date-options-container');
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
    
    dateOptionsContainer.style.display = 'none'; // Hide date options initially
    datePicker.style.display = 'none'; // Hide date picker initially
    submitDateButton.style.display = 'none'; // Hide submit button initially

    yesButton.addEventListener('click', function () {
        responseGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseText.textContent = "Ok yay!!! Then we can go on a date.";
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        dateOptionsContainer.style.display = 'block'; // Show date options
    });

    noButton.addEventListener('click', function () {
        if (noCount < noPhrases.length) {
            noButton.textContent = noPhrases[noCount];
            noCount++;
        } else {
            noButton.style.display = 'none';
            responseText.textContent = "Oh, okay :(";
        }

        var buttonRect = noButton.getBoundingClientRect();
        var containerRect = document.getElementById('main-container').getBoundingClientRect();
        
        var maxMove = 30;
        var randomX = Math.random() * maxMove * 2 - maxMove;
        var randomY = Math.random() * maxMove * 2 - maxMove;

        var newX = Math.min(containerRect.right - buttonRect.width, Math.max(containerRect.left, buttonRect.left + randomX));
        var newY = Math.min(containerRect.bottom - buttonRect.height, Math.max(containerRect.top, buttonRect.top + randomY));

        noButton.style.transform = `translate(${newX - buttonRect.left}px, ${newY - buttonRect.top}px)`;
    });

    document.querySelectorAll('.date-option').forEach(function(option) {
        option.addEventListener('click', function() {
            if (this.id === 'pick-date') {
                datePicker.classList.remove('hidden');
                submitDateButton.classList.remove('hidden');
                dateOptionsContainer.style.display = 'none'; // Hide date options
            } else {
                responseText.textContent = `Great! Let's go to ${this.textContent}!`;
                dateOptionsContainer.style.display = 'none';
            }
        });
    });

    submitDateButton.addEventListener('click', function() {
        if (datePicker.value) {
            responseText.textContent = `Date set for ${datePicker.value}! Looking forward to it!`;
            datePicker.classList.add('hidden'); // Hide date picker
            submitDateButton.classList.add('hidden'); // Hide submit button
        } else {
            responseText.textContent = "Please pick a date.";
        }
    });
});
