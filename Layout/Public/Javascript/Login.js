
document.querySelector("#Click_Submit").addEventListener("submit", (event) => {
    event.preventDefault();
    let Email = document.querySelector("#Name_Login").value;
    let Password = document.querySelector("#Password_Login").value;
           
    if (Email.length >= 1 && Password.length >= 1){
        fetch('/Login/Add_Login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },   

            body: JSON.stringify({
                Email: Email,
                Password : Password
            })
        })


        .then(response => response.text())
        .then(data => {
            if (data === 'Thanhcong'){
                alert ('Đăng Nhập Thành Công');
                window.location.href = '/';
            } else {
                alert ('Đăng Nhập Thất Bai');
            }
        })
        .catch(error => {
            console.error("Có lỗi xảy ra: " + error);
        });

    } else {  
        let Notification = new Load_Notification('Vui lòng nhập đủ thông tin vào form', 2600);
        Notification.ADD_Notification();
    }
});
