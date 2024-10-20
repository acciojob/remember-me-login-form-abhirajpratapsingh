// Get references to the form elements
const loginForm = document.getElementById("login-form");
const existingUserButton = document.getElementById("existing");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");

// Load saved credentials on page load
window.onload = function() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingUserButton.style.display = "block"; // Show existing user button
        usernameInput.value = savedUsername; // Pre-fill the username
    }
};

// Handle form submission
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (checkbox.checked) {
        // Save username and password to local storage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        // Remove username and password from local storage
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    alert(`Logged in as ${username}`); // Show alert with username
});

// Handle existing user login
existingUserButton.addEventListener("click", function() {
    const savedUsername = localStorage.getItem("username");
    alert(`Logged in as ${savedUsername}`); // Show alert with saved username
});
