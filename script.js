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
    var dateOptions = document.querySelectorAll('.date-option');
    
    const hideButtons = () => {
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
    };

    const showDateOptions = () => {
        dateOptionsContainer.style.display = 'block';
    };

    yesButton.addEventListener('click', function () {
        responseGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseText.textContent = "Ok yay!!! Then we can go on a date.";
        hideButtons();
        showDateOptions();
    });

    const displayNoPhrase = () => {
        if (noCount < noPhrases.length) {
            noButton.textContent = noPhrases[noCount];
            noCount++;
        } else {
            noButton.style.display = 'none';
            responseText.textContent = "Oh, okay :(";
        }
    };

    noButton.addEventListener('click', function () {
        displayNoPhrase();
        const maxMove = 30;
        const randomX = Math.random() * maxMove * 2 - maxMove;
        const randomY = Math.random() * maxMove * 2 - maxMove;
        const buttonRect = noButton.getBoundingClientRect();
        const containerRect = document.getElementById('main-container').getBoundingClientRect();
        const newX = Math.min(containerRect.right - buttonRect.width, Math.max(containerRect.left, buttonRect.left + randomX));
        const newY = Math.min(containerRect.bottom - buttonRect.height, Math.max(containerRect.top, buttonRect.top + randomY));
        noButton.style.transform = `translate(${newX - buttonRect.left}px, ${newY - buttonRect.top}px)`;
    });

    dateOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            if (this.id === 'pick-date') {
                datePickerContainer.style.display = 'block';
                submitDateButton.style.display = 'block';
                dateOptionsContainer.style.display = 'none';
            } else {
                responseText.textContent = `Great! Let's go to the ${this.textContent}!`;
                datePickerContainer.style.display = 'none';
                submitDateButton.style.display = 'none';
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
