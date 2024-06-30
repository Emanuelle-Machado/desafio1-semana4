
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');

    if (firstName && lastName && email && message) {
        console.log(firstName, lastName, email, message);
        document.getElementById('firstNameDisplay').innerHTML = firstName;
        document.getElementById('lastNameDisplay').innerHTML = lastName;
        document.getElementById('emailDisplay').innerHTML = email;
        document.getElementById('messageDisplay').innerHTML = message;
    } else {
        alert('No data found');
        window.location.href = '../pages/error.html';
    }
});


/*
window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const formData = document.getElementById('formData');
    formData.innerHTML = `
        <p>Primeiro Nome: ${params.get('firstName')}</p>
        <p>Sobrenome: ${params.get('lastName')}</p>
        <p>Email: ${params.get('email')}</p>
        <p>Mensagem: ${params.get('message')}</p> `;

};
*/
