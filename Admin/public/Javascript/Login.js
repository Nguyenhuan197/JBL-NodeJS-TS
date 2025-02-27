"use strict";
var _a;
(_a = document.querySelector('#Click_Submit')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (Event) => {
    Event.preventDefault();
    const Email_ADMIN_Login = document.querySelector("#EMAIL_ADMIN").value;
    const Password_ADMIN_Login = document.querySelector("#PASSWORD_ADMIN").value;
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
            if (data == 'True') {
                alert('Đăng Nhập Thành Công');
                window.location.href = '/Admin';
            }
            else {
                alert('Đăng Nhập Thất Bại');
            }
        })
            .catch(error => {
            console.error('Error:', error);
        });
    }
});
