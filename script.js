// Array of 321 unique messages
const messages = [
    "Have a fantastic day ahead ❤️",
    "You're capable of amazing things ❤️",
    "Believe in yourself, always ❤️",
    "Keep pushing forward, you've got this ❤️",
    "Every day is a fresh start ❤️",
    "Be the reason someone smiles today ❤️",
    "Your potential is limitless ❤️",
    "Stay positive and strong ❤️",
    "Dream big, work hard, and make it happen ❤️",
    "You are braver than you believe ❤️",
    // Add 311 more unique messages here...
    "The future belongs to those who believe in their dreams ❤️",
    "Happiness is not by chance but by choice ❤️",
    "Make today count—it’s your day ❤️"
];

// Function to get a random non-repeating message
let usedMessages = new Set();

function getRandomMessage() {
    if (usedMessages.size === messages.length) {
        // Reset if all messages are used
        usedMessages.clear();
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * messages.length);
    } while (usedMessages.has(randomIndex));

    usedMessages.add(randomIndex);
    return messages[randomIndex];
}

// Event listener for the form submission
document.getElementById("nameForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value.trim();
    const greetingDiv = document.getElementById("greetingMessage");

    if (userName !== "") {
        const randomMessage = getRandomMessage();
        greetingDiv.innerHTML = `<p>Hello, <strong>${userName}</strong>! ${randomMessage}</p>`;
    } else {
        greetingDiv.innerHTML = `<p>Please enter your name to receive your message❤️</p>`;
    }
});
