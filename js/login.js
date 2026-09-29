// ========================================
// MALAWI GEOPORTAL
// DEMO LOGIN
// ========================================

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");


// Demo accounts
const demoUsers = [
    {
        email: "public@geoportal.mw",
        password: "public123",
        role: "public"
    },

    {
        email: "department@geoportal.mw",
        password: "dept123",
        role: "department"
    },

    {
        email: "admin@geoportal.mw",
        password: "admin123",
        role: "admin"
    }
];


// Handle login
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value.trim().toLowerCase();

    const password =
        document.getElementById("password").value;

    const role =
        document.getElementById("role").value;


    // Find matching account
    const user = demoUsers.find(function(account) {

        return (
            account.email === email &&
            account.password === password &&
            account.role === role
        );

    });


    // Check login
    if (user) {

        // Save login session
        localStorage.setItem(
            "geoportalUser",
            JSON.stringify(user)
        );


        loginMessage.textContent =
            "Login successful. Redirecting...";

        loginMessage.className =
            "login-message success";


        // Redirect after login
        setTimeout(function() {

            window.location.href = "dashboard.html";

        }, 1000);


    } else {

        loginMessage.textContent =
            "Invalid email, password, or account type.";

        loginMessage.className =
            "login-message error";

    }

});