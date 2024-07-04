document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('loginModal');
    var loginBtn = document.getElementById('loginBtn');
    var span = document.getElementsByClassName('close')[0];

    loginBtn.onclick = function () {
        modal.style.display = 'block';
    }

    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Login form submitted');
        modal.style.display = 'none';
    });
});