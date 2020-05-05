

function LoginFunction() {

    
    // Getting references to our form and inputs
    var loginForm = document.querySelector("form.login");
    var emailInput = document.querySelector("input#email-input");
    var passwordInput = document.querySelector("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        loginUser.post("/api/login", {
                email: email,
                password: password
            })
            .then(function() {
                window.location.replace("/dashboard");
                // If there's an error, log the error
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        document.querySelector("#alert .msg").text(err.responseJSON);
        document.querySelector("#alert").fadeIn(500);
    }


};