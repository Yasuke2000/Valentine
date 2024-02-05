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

    // Animation for the Yes button on page load
    yesButton.style.animation = 'bounce 0.5s';
    yesButton.style.animationIterationCount = 'infinite';

    yesButton.addEventListener('click', function () {
        responseGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseText.textContent = "Ok yay!!! Then we can go on a date.";
        yesButton.style.display = 'none';
        noButton.style.animation = 'bounceAway 0.5s';
        noButton.style.animationIterationCount = 'infinite';
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

        // Move the button within a confined area
        var buttonRect = noButton.getBoundingClientRect();
        var containerRect = document.getElementById('main-container').getBoundingClientRect();

        var maxMove = 30;
        var randomX = Math.random() * maxMove * 2 - maxMove;
        var randomY = Math.random() * maxMove * 2 - maxMove;

        var newX = Math.min(containerRect.right - buttonRect.width, Math.max(containerRect.left, buttonRect.left + randomX));
        var newY = Math.min(containerRect.bottom - buttonRect.height, Math.max(containerRect.top, buttonRect.top + randomY));

        noButton.style.transform = `translate(${newX - buttonRect.left}px, ${newY - buttonRect.top}px)`;
    });

    document.querySelectorAll('.date-option').forEach(function (option) {
        option.addEventListener('click', function () {
            if (this.id === 'pick-date') {
                datePicker.classList.remove('hidden');
                submitDateButton.classList.remove('hidden');
            } else {
                responseText.textContent = `Great! Let's go to the ${this.textContent}!`;
                dateOptionsContainer.style.display = 'none';
            }
        });
    });

    submitDateButton.addEventListener('click', function () {
        var selectedDateOption = document.querySelector('input[name="date-option"]:checked');
        if (selectedDateOption && datePicker.value) {
            responseText.textContent = `Date set for ${datePicker.value}! Looking forward to ${selectedDateOption.value}!`;
            dateOptionsContainer.style.display = 'none';
            submitDateButton.style.display = 'none';
            // Submit the form here using Netlify form submission method
            // You can use JavaScript to send a request to the form's action URL with the selected values
            // Example: https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
        } else {
            responseText.textContent = "You gotta pick something and set a date!";
        }
    });
});
