
document.querySelector("#Click_Submit").addEventListener("submit", (event) => {
    event.preventDefault();
    let Email = document.querySelector("#Name_Login").value;
    let Password = document.querySelector("#Password_Login").value;  
    
    if (Email.trim().length >= 5 && Password.trim().length >= 5){
        // Felt API ADD DATA LOGIN
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

            if (data != 'False'){
                fetch('/SaveToken/Add', {   
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ID : data,
                        Name: 'xxx',
                        Email : Email
                    })       
                })
            
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('token', data.token); // Lưu Token vào LocalStorage
                    window.location.href = '/';
                });
            } else {
                alert ('Đăng Nhập Thất Bại')
                window.location.href = '/Login';
            }
        })


        .catch(error => {
            console.error("Có lỗi xảy ra: " + error);
        });


    } else {  
        
        if (Email.trim().length < 5){
            alert ('Email ít Nhất 3 Ký Tự');
        } else if (Password.trim().length < 5){
            alert ('Mật khẩu ít Nhất 5 Ký Tự');
        } else {
            alert ('');
        }

        let Notification = new Load_Notification('Đăng nhập Thất Bại ', 2600);
        Notification.ADD_Notification();
    }
});
