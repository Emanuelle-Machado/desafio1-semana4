
console.log('DOM fully loaded and parsed');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

let btn = document.querySelector('.form-btn');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('submitted');

    const namePattern = /[a-zA-Z]/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    let amount = 0;
    let whatPage = true;

    if ((firstName.value === "") || (lastName.value === "") || (email.value === "") || (message.value === "")) {
        alert("Todos os campos são obrigatórios.");
        whatPage = false;
        console.log(whatPage);
    }

    if (!validateInput(firstName, namePattern)) {
        console.log(firstName.value);
        amount++;
    }
    if (!validateInput(lastName, namePattern)) {
        console.log(lastName.value);
        amount++;
    }
    if (!validateInput(email, emailPattern)) {
        console.log(email.value);
        amount++;
    }

    if (message == '') {
        message.style.border = '1px solid #ccc';
        message.setCustomValidity('No input provided');
        console.log('no input');
    } else if (message.value.length >= 10) {
        message.style.border = '2px solid green';
        console.log(message.value);
        console.log('correct');
        amount++;
    } else {
        message.style.border = '2px solid red';
        message.setCustomValidity('Invalid input');
        console.log('incorrect');
    }

    if (whatPage == true && amount == 4) {
        console.log(whatPage);
        localStorage.setItem('firstName', firstName.value);
        localStorage.setItem('lastName', lastName.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('message', message.value);

        return window.location.href = 'http://127.0.0.1:5500/pages/sucess.html';
    } else {
        alert("Preencha todos os campos corretamente.");

    }

});

function validateInput(x, pattern) {
    console.log('validando input');

    if (x.value == '') {
        x.style.border = '1px solid #ccc';
        x.setCustomValidity('No input provided');
        console.log('no input');
    } else if (x.value.match(pattern)) {
        x.style.border = '2px solid green';
        console.log('correct');
    } else {
        x.style.border = '2px solid red';
        x.setCustomValidity('Invalid input');
        console.log('incorrect');
    }



}
