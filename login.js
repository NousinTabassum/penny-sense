document.getElementById('submit').addEventListener('click', function () {
    const emailButton = document.getElementById('email-button');
    const email = emailButton.value;

    const passwordButton = document.getElementById('password-button');
    const password = passwordButton.value;

    if (email === 'nousin@gmail.com' && password === 'nousin133') {
        location.href = "home.html";
    }
    else {
        alert("Please Enter Correct Email and Password")
    }

})
