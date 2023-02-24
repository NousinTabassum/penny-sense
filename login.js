document.getElementById('submit').addEventListener('click', function () {
    const emailButton = document.getElementById('email-button');
    const email = emailButton.value;

    const passwordButton = document.getElementById('password-button');
    const password = passwordButton.value;

    if (email === 'admin@gmail.com' && password === '1234') {
        location.href = "home.html";
    }
    else {
        alert("Please Enter Correct Email and Password")
    }

})
