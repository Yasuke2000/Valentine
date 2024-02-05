document.addEventListener('DOMContentLoaded', function () {
    var noCount = 0;
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');
    var responseText = document.getElementById('response-text');
    var dateOptionsContainer = document.getElementById('date-options-container');
    var datePicker = document.getElementById('date-picker');
    var submitDateButton = document.getElementById('submit-date');
    var responseGif = document.getElementById('response-gif');
    var cuteGifUrl = "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif";

    yesButton.addEventListener('click', function () {
        responseGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseText.textContent = "Great! Will you choose our date?";
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
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

    var noPhrases = [
        "No", "Are you sure?", "Really sure?", "Think again!", "Last chance!",
        "Surely not?", "You might regret this!", "Give it another thought!",
        "Are you absolutely certain?", "This could be a mistake!", "Have a heart!",
        "Don't be so cold!", "Change of heart?", "Wouldn't you reconsider?",
        "Is that your final answer?", "You're breaking my heart"
    ];

    document.querySelectorAll('.date-option-label input[type="radio"]').forEach(function (radio) {
        radio.addEventListener('change', function () {
            submitDateButton.style.display = 'block';
        });
    });

    submitDateButton.addEventListener('click', function () {
        var chosenDate = datePicker.value;
        var chosenOption = document.querySelector('.date-option-label input[type="radio"]:checked');

        if (chosenDate && chosenOption) {
            var optionText = chosenOption.parentElement.textContent.trim();
            responseText.textContent = `Date set for ${chosenDate}! Looking forward to our ${optionText} date!`;
            dateOptionsContainer.style.display = 'none';
            cuteGifUrl = "https://gifdb.com/images/high/cute-pikachu-love-kissing-PkNUYF.gif";
            responseGif.src = cuteGifUrl;
        } else {
            responseText.textContent = "Please pick a date and an option.";
        }
    });
});
