document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');
    var valentineQuestion = document.getElementById('valentine-question'); // Assuming this is the ID of your Valentine's question element
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
    var noButtonMoved = false;

    yesButton.addEventListener('click', function () {
        valentineQuestion.textContent = "Yay! You said yes! 😊";
        responseGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseText.innerHTML = "What date should we go on?";
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        dateForm.classList.remove('hidden');
    });

    noButton.addEventListener('click', function () {
        if (!noButtonMoved) {
            moveNoButton();
            noButtonMoved = true;
        }

        if (noCount < noPhrases.length) {
            noButton.textContent = noPhrases[noCount];
            noCount++;
        } else {
            noButton.style.display = 'none';
            responseText.textContent = "Oh, okay :(";
        }
    });

    function moveNoButton() {
        noButton.removeEventListener('click', moveNoButton);
        noButton.addEventListener('mouseover', function () {
            const maxX = window.innerWidth - noButton.offsetWidth;
            const maxY = window.innerHeight - noButton.offsetHeight;
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;

            noButton.style.position = 'fixed';
            noButton.style.left = newX + 'px';
            noButton.style.top = newY + 'px';
        });
    }

    dateForm.addEventListener('change', function () {
        var selectedDateOption = document.querySelector('input[name="date-option"]:checked');
        if (selectedDateOption && datePicker.value) {
            submitDateButton.classList.remove('hidden');
        } else {
            submitDateButton.classList.add('hidden');
        }
    });

    dateForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var selectedDateOption = document.querySelector('input[name="date-option"]:checked');

        var formData = new FormData(dateForm);
        formData.append('form-name', dateForm.getAttribute('name'));

        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            responseText.textContent = `Great! See you on ${datePicker.value} for our ${selectedDateOption.value} date!`;
            dateForm.classList.add('hidden');
        })
        .catch((error) => {
            responseText.textContent = 'Submission failed: ' + error;
        });
    });
});
