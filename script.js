// Array of messages for target
const messages = [
    "I will always be grateful to have you in my life ❤️",
    "You're the primordial sea to my all devouring narwhal ❤️",
    "Believe in yourself, always ❤️",
    "Keep pushing forward, you've got this ❤️",
    "You're my favorite, always ❤️",
    "You make me smile everyday ❤️",
    "You're beautiful ❤️",
    "Can I borrow a kiss? I promise to give it back! ❤️",
    "I miss you ❤️",
    "You make me feel special ❤️",
    "I'm so proud of you ❤️",
    "Hug for you ❤️",
];

// Function to get a random message
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

// Event listener for the form submission
document.getElementById("nameForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value.trim().toLowerCase(); // Convert input to lowercase
    const greetingDiv = document.getElementById("greetingMessage");

    if (userName === "choco") {
        // Display a personalized message for the valid username
        const randomMessage = getRandomMessage();
        greetingDiv.innerHTML = `<p>Hello, <strong>${userName.charAt(0).toUpperCase() + userName.slice(1)}</strong>! ${randomMessage}</p>`;
    } else {
        // Display an error message for invalid usernames
        greetingDiv.innerHTML = `<p style="color: red;">Sorry, only loml is allowed to receive messages ❤️</p>`;
    }
});
