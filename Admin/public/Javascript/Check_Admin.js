"use strict";
window.onload = () => {
    let Set_Token = sessionStorage.getItem("Token_Admins");
    fetch('/CheckToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Token: Set_Token
        })
    })
        .then(response => response.json())
        .then(data => {
        if (data.Status_Admin === 2) {
            console.log(data);
        }
        else {
            alert('Hết Phiên Đăng Nhập Vui Lòng Đăng Nhập Lại ');
            window.location.href = '/';
        }
    })
        .catch(err => {
        alert("Cảnh báo người dùng");
        console.error("Lỗi xác minh Token:", err);
    });
};
