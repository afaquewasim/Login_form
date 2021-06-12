const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    hideError(username);
    hideError(password);
    hideError(email);

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue && emailValue && passwordValue) {
if (passwordValue.length < 6) {
    showError(password, 'Password should be minimum 6 charectrer');
    return;
}
        console.log(usernameValue, emailValue, passwordValue);
        alert('Thanks for your joining us!');
    } else {
        switch ('') {
            case usernameValue:
                showError(username, 'Please enter your name!');
            case emaiValue:
                 showError(email, 'Please enter your Email!');
            case passwordValue:
                showError(password, 'Please enter your Password!');
        }
    }
});



function showError(input, message) {
    const inputField = input.parentElement;
    const errorMsg = inputField.querySelector('.error-msg');
    inputField.className = 'input-field error';
    errorMsg.innerText = message;
}

function hideError(input) {
    const inputField = input.parentElement;
    const errorMsg = inputField.querySelector('.error-msg');
    inputField.className = 'input-field';
    errorMsg.innerText = '';
}



