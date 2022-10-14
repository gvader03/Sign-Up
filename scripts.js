const submitButton = document.querySelector('.submit');
const pass = document.getElementById('password');
const confirm = document.getElementById('password-confirm');
const error = document.querySelector('.password-error');

function match(e){
    if (pass.value !== confirm.value) {
        error.innerText = 'Passwords do not match';
        error.classList.add = 'error';

        e.preventDefault();
    }
}

submitButton.addEventListener('click', match);