document.getElementById('btn-submit').addEventListener('click', function () {

    const emailField = document.getElementById('user-email')
    const email = emailField.value

    const passwordField = document.getElementById('user-password')
    const password = passwordField.value

    // DANGER: Do not verify email, password on the client side - 
    if (email === 'my@bank.com' && password === 'secret') {
        window.location.href = 'bank.html'
    }
    else {
        alert('wrong! please try again')
    }

})