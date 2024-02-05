document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');
    var valentineQuestion = document.getElementById('valentine-question'); // Ensure this is the ID of your Valentine's Day question
    var responseText = document.getElementById('response-text');
    var dateForm = document.getElementById('date-form');
    var datePicker = document.getElementById('date-picker');
    var submitDateButton = document.getElementById('submit-date');
    var responseGif = document.getElementById('response-gif');
    var noPhrases = [
        "Are you sure?", "Really sure?", "Think again!", "Last chance!",
        "Surely not?", "You might regret this!", "Give it another thought!",
        "Are you absolutely certain?", "This could be a mistake!", "Have a heart!",
        "Don't be so cold!", "Change of heart?", "Wouldn't you reconsider?",
        "Is that your final answer?", "You're breaking my heart"
    ];
    var noCount = 0;

    yesButton.addEventListener('click', function () {
        valentineQuestion.textContent = "Yay! You said yes! 😊";
        responseGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseText.innerHTML = "What date should we go on?";
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        dateForm.classList.remove('hidden');
    });

    noButton.addEventListener('click', function () {
        if (noCount < noPhrases.length) {
            noButton.textContent = noPhrases[noCount];
            noCount++;
            setTimeout(moveNoButton, 2000); // Delay before the button moves
        } else {
            noButton.style.display = 'none';
            responseText.textContent = "Oh, okay :(";
            responseText.style.position = 'fixed';
            responseText.style.left = '50%';
            responseText.style.top = '50%';
            responseText.style.transform = 'translate(-50%, -50%)';
        }
    });

    function moveNoButton() {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noButton.style.position = 'fixed';
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';
    }

    dateForm.addEventListener('change', function () {
        var selectedDateOption = document.querySelector('input[name="date-option"]:checked');
        if (selectedDateOption && datePicker.value) {
            submitDateButton.classList.remove('hidden');
        } else {
            submitDateButton.classList.add('hidden');
        }
    });
});
