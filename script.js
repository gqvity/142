// Array of messages for Hannah and Choco
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
    "You are braver than you believe ❤️"
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

    if (userName === "hannah" || userName === "choco") {
        // Display a personalized message for valid usernames
        const randomMessage = getRandomMessage();
        greetingDiv.innerHTML = `<p>Hello, <strong>${userName.charAt(0).toUpperCase() + userName.slice(1)}</strong>! ${randomMessage}</p>`;
    } else {
        // Display an error message for invalid usernames
        greetingDiv.innerHTML = `<p style="color: red;">Sorry, only loml is allowed to receive messages ❤️</p>`;
    }
});
