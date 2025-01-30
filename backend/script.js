//this function is used to toggle the password visibility (BOTH SIGNUP AND LOGIN)

function togglePassword() {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "/images/show-eye.png";
    } else {
        passwordField.type = "password"; 
        eyeIcon.src = "/images/block-eye.png";
    }
}

function togglePassword(inputId, eyeIconId) {
    const passwordField = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeIconId);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "/images/show-eye.png";  
    } else {
        passwordField.type = "password";
        eyeIcon.src = "/images/block-eye.png";  
    }
}

//Anything extra can be added here