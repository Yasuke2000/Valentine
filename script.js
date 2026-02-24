document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');
    var valentineQuestion = document.getElementById('valentine-question');
    var responseText = document.getElementById('response-text');
    var dateForm = document.getElementById('date-form');
    var datePicker = document.getElementById('date-picker');
    var submitDateButton = document.getElementById('submit-date');
    var responseGif = document.getElementById('response-gif');
    var heartsBg = document.getElementById('hearts-bg');

    // Create floating hearts background
    createFloatingHearts();

    // Start the Yes button pulse after a short delay
    setTimeout(function () {
        yesButton.classList.add('pulse');
    }, 2000);

    var noPhrases = [
        "Are you sure? 🥺",
        "Really sure?",
        "Think again! 💭",
        "Last chance!",
        "Surely not? 😢",
        "You might regret this!",
        "Give it another thought! 💝",
        "Are you absolutely certain?",
        "This could be a mistake! 😭",
        "Have a heart! ❤️",
        "Don't be so cold! 🥶",
        "Change of heart? 💘",
        "Wouldn't you reconsider?",
        "Is that your final answer? 🤔",
        "You're breaking my heart 💔"
    ];
    var noCount = 0;
    var yesScale = 1;

    var sadReactionGif = "https://media.giphy.com/media/Jq7y34Hgfy01y/giphy.gif";

    yesButton.addEventListener('click', function () {
        yesButton.classList.remove('pulse');
        valentineQuestion.textContent = "Yay! You said yes! 🎉";
        responseGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
        responseGif.alt = "Cute bears kissing";
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        dateForm.classList.remove('hidden');

        // Burst hearts from the button location
        burstHearts(window.innerWidth / 2, window.innerHeight / 2);
    });

    noButton.addEventListener('click', function () {
        if (noCount < noPhrases.length) {
            noButton.textContent = noPhrases[noCount];
            noCount++;

            // Grow the Yes button each time No is clicked
            yesScale += 0.15;
            yesButton.style.transform = 'scale(' + yesScale + ')';
            yesButton.classList.remove('pulse');

            // Shrink No button slightly
            var noScale = Math.max(0.6, 1 - noCount * 0.03);
            noButton.style.fontSize = noScale + 'rem';

            setTimeout(moveNoButton, 1500);
        } else {
            noButton.style.display = 'none';
            responseText.textContent = "Oh, okay... 😢";
            responseGif.src = sadReactionGif;
            responseGif.alt = "Sad reaction";
            responseText.classList.remove('hidden');
            responseText.style.position = 'relative';
            responseText.style.top = '10px';

            // After a beat, show the yes button again with a nudge
            setTimeout(function () {
                responseText.textContent = "...but maybe reconsider? 🥺";
                yesButton.style.display = '';
                yesButton.style.transform = 'scale(1.5)';
                yesButton.classList.add('pulse');
            }, 3000);
        }
    });

    function moveNoButton() {
        var padding = 20;
        var maxX = window.innerWidth - noButton.offsetWidth - padding;
        var maxY = window.innerHeight - noButton.offsetHeight - padding;
        var newX = Math.random() * maxX;
        var newY = Math.random() * maxY;

        noButton.style.position = 'fixed';
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';
        noButton.style.zIndex = '100';
        noButton.style.transition = 'left 0.3s ease, top 0.3s ease';
    }

    dateForm.addEventListener('change', function () {
        var selectedDateOption = document.querySelector('input[name="date-option"]:checked');
        if (selectedDateOption && datePicker.value) {
            submitDateButton.classList.remove('hidden');
        } else {
            submitDateButton.classList.add('hidden');
        }
    });

    // Heart burst effect
    function burstHearts(x, y) {
        var hearts = ['❤️', '💕', '💖', '💗', '💘', '💝', '🥰', '✨'];
        for (var i = 0; i < 15; i++) {
            (function (index) {
                setTimeout(function () {
                    var heart = document.createElement('span');
                    heart.className = 'heart-burst';
                    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.left = (x + (Math.random() - 0.5) * 200) + 'px';
                    heart.style.top = (y + (Math.random() - 0.5) * 100) + 'px';
                    heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
                    document.body.appendChild(heart);

                    setTimeout(function () {
                        heart.remove();
                    }, 1200);
                }, index * 50);
            })(i);
        }
    }

    // Floating hearts in background
    function createFloatingHearts() {
        var heartChars = ['❤', '♥', '💕', '💗'];
        for (var i = 0; i < 15; i++) {
            (function (index) {
                var heart = document.createElement('span');
                heart.className = 'floating-heart';
                heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
                heart.style.animationDuration = (8 + Math.random() * 12) + 's';
                heart.style.animationDelay = (Math.random() * 10) + 's';
                heartsBg.appendChild(heart);
            })(i);
        }
    }

    // Set min date to today on the date picker
    var today = new Date().toISOString().split('T')[0];
    datePicker.setAttribute('min', today);
});
