
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const emailBtn = document.getElementById('email-btn');
const emailBox = document.getElementById('email-box');

function validateEmail() {

    if (!validateInput(emailBox, emailPattern)) {
        console.log(email.value);
        alert('Email sent');
    } else {
        alert('Email not sent');
    }
}


emailBtn.addEventListener('click', function () {
    console.log('email-btn');

    validateEmail();
});

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

