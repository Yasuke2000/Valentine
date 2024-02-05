document.addEventListener('DOMContentLoaded', function () {
    var noCount = 0;
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');
    var responseText = document.getElementById('response-text');
    var dateOptionsContainer = document.getElementById('date-options-container');
    var dateOptions = document.querySelectorAll('input[name="date-option"]');
    var datePickerContainer = document.querySelector('.date-picker-container');
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

    dateOptions.forEach(function (option) {
        option.addEventListener('change', function () {
            if (this.value === 'pick-date') {
                datePickerContainer.style.display = 'block';
            } else {
                var chosenDateOption = document.querySelector('input[name="date-option"]:checked');
                responseText.textContent = `Great! Let's go to the ${chosenDateOption.nextSibling.textContent}!`;
                dateOptionsContainer.style.display = 'none';
            }
        });
    });

    submitDateButton.addEventListener('click', function () {
        if (datePicker.value) {
            responseText.textContent = `Date set for ${datePicker.value}! Looking forward to it!`;
            dateOptionsContainer.style.display = 'none';
            datePickerContainer.style.display = 'none';
        } else {
            responseText.textContent = "Please pick a date.";
        }
    });
});
