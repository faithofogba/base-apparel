const email = document.getElementById('email')
const errorElement = document.getElementById('error')

const form = document.getElementById('form')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    const emailValue = email.value.trim();

    if(emailValue === "") {
        setErrorFor(email, "Please provide a valid email")
    } else {
        setSuccessFor(email)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error message inside small 
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control';
}