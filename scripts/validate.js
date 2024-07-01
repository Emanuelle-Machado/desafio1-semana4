
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    const form = document.getElementById('contactForm');



    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    function validateForm() {
        console.log('validando form');
        const namePattern = /[a-zA-Z]{3,}/;
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        let amount = 0;
        let whatPage = true;


        if ((firstName.value === "") || (lastName.value === "") || (email.value === "") || (message.value === "")) {
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

        if (message.value == '') {
            message.style.border = '1px solid #ccc';
            console.log('no input');
        } else if (message.value.length >= 10) {
            message.style.border = '2px solid green';
            console.log(message.value);
            console.log('correct');
            amount++;
        } else {
            message.style.border = '2px solid red';
            console.log('incorrect');
        }

        if (whatPage == true && amount == 4) {
            console.log(whatPage);
            localStorage.setItem('firstName', firstName.value);
            localStorage.setItem('lastName', lastName.value);
            localStorage.setItem('email', email.value);
            localStorage.setItem('message', message.value);


            return;

        }
    }
    function validateInput(x, pattern) {
        console.log('validando input');

        if (x.value == '') {
            x.style.border = '1px solid #ccc';
            console.log('no input');
        } else if (x.value.match(pattern)) {
            x.style.border = '2px solid green';
            console.log('correct');
        } else {
            x.style.border = '2px solid red';
            console.log('incorrect');
        }
    }

});
