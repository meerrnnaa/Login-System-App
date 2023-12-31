
    function register() {
        // Implement registration logic here
        var regEmail = document.getElementById("regEmail").value;
        var regPassword = document.getElementById("regPassword").value;

        // Check if email is valid
        if (!isValidEmail(regEmail)) {
            alert("Invalid email address");
            return;
        }

        // Check if email is already registered (you can use a backend service for this)
        // For simplicity, let's assume registration is successful
        alert("Registration successful!");

        // Automatically log in after successful registration
        showHomePage(regEmail);
    }

    function isValidEmail(email) {
        // Implement email validation logic
        // You can use a regular expression or any other method
        return true;
    }

    function login() {
        // Implement login logic here
        var loginEmail = document.getElementById("loginEmail").value;
        var loginPassword = document.getElementById("loginPassword").value;

        // Check if login credentials are valid
        if (!isValidLogin(loginEmail, loginPassword)) {
            alert("Invalid email or password");
            return;
        }

        // Perform login (set session, redirect to home, etc.)
        // For simplicity, let's assume login is successful
        alert("Login successful!");
        showHomePage(loginEmail);
    }

    function isValidLogin(email, password) {
        // Implement logic to check if login credentials are valid
        // You may need to make an API call to your backend for this
        return true;
    }

    function showHomePage(userName) {
        document.getElementById("registrationForm").style.display = "none";
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("homePage").style.display = "block";
        document.getElementById("userName").innerText = "Hello, " + userName + "!";
    }

    function logout() {
        // Implement logout logic here (clear session, etc.)
        alert("Logout successful!");
        // Redirect to the registration/login page
        location.reload();
    }



 


