body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ffe0e0;
}

.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.button {
    cursor: pointer;
    padding: 10px 20px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    transition: background-color 0.2s;
}

.bg-green-500 {
    background-color: #38a169;
}

.bg-green-500:hover {
    background-color: #2f855a;
}

.bg-red-500 {
    background-color: #e53e3e;
}

.bg-red-500:hover {
    background-color: #c53030;
}

.hidden {
    display: none;
}

#response-gif {
    height: 200px;
    animation: fadeIn 2s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.date-option {
    margin-right: 1rem;
}

.text-4xl {
    font-size: 1.5em;
    margin: 0.5em 0;
}

.my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.hover\:bg-green-700:hover {
    background-color: #2f855a;
}

.hover\:bg-red-700:hover {
    background-color: #c53030;
}

.cute-gif {
    height: 200px;
    animation: fadeIn 2s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.bg-blue-500 {
    background-color: #4299e1;
}

.bg-blue-500:hover {
    background-color: #3182ce;
}
