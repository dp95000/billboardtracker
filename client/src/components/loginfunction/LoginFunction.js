import $ from 'jquery';

export default function LoginFunction(event) {
    // Getting references to our form and inputs
    var emailInput = document.querySelector("input#email-input");
    var passwordInput = document.querySelector("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    var userData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    };

    if (!userData.email || !userData.password) {
        alert("Invalid entry. Please try again.");
        return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.value = "";
    passwordInput.value = "";

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login/?email=" + email + "&password=" + password, {
            email: email,
            password: password
        })
            .then(function () {
                window.location.replace("/dashboard");
                // If there's an error, log the error
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        console.log("fail");
        if (document.querySelector("#alert .msg")) {
            document.querySelector("#alert .msg").text(err.responseJSON);
        }

        if (document.querySelector("#alert")) {
            document.querySelector("#alert").fadeIn(500);
        }
    }
};

