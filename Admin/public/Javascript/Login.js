"use strict";
var _a;
(_a = document.querySelector('#Click_Submit')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (Event) => {
    Event.preventDefault();
    const Email_ADMIN_Login = document.querySelector("#EMAIL_ADMIN").value;
    const Password_ADMIN_Login = document.querySelector("#PASSWORD_ADMIN").value;
    // Fell Check _ API
    if (Email_ADMIN_Login.trim().length > 1 && Password_ADMIN_Login.trim().length > 1) {
        fetch('/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email_Login: Email_ADMIN_Login,
                Password_Login: Password_ADMIN_Login
            })
        })
            .then(response => response.text())
            .then(data => {
            if (data.length === 2) {
                alert('Đăng Nhập Thất Bại');
                window.location.href = '/';
            }
            else {
                SAVE_Token(Email_ADMIN_Login);
            }
        })
            .catch(error => {
            console.error('Error:', error);
        });
    }
});
let SAVE_Token = (Email) => {
    fetch('/AddToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Email: Email,
        })
    })
        .then(response => response.text())
        .then(data => {
        sessionStorage.setItem("Token_Admins", data);
        window.location.href = '/Admin';
    })
        .catch(error => {
        console.error('Error:', error);
    });
};
