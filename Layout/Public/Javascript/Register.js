
document.querySelector('#Check_Register_Form').addEventListener('submit', (event) => {
    event.preventDefault();
    const Name = document.querySelector('#Name_Register').value;
    const Email = document.querySelector('#Email_Register').value;
    const Password = document.querySelector('#Password_Register').value;

    if (Name.trim().length >= 3 && Name.trim().length >= 5 && Password.trim().length >= 5){ 
        // Save Token
        fetch('/SaveToken/Add', {   
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Name: Name,
                Email : Email
            })
        })

        .then(response => response.json())
        .then(data => {
            localStorage.setItem('token', data.token);
  
            // Loadding PUST API
            fetch('/Rigister/ADD_Form_Register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },           

              body: JSON.stringify({
                Name_Register: Name,  
                Email_Register: Email,    
                Password_Register:  Password
              })
          })

          .then(response => response.text())  
          .then(data => {  
            alert ('Đăng Ký Thành Công')
            window.location.href = '/';
          })   
      
          .catch(error => {
            console.error('Error:', error);
          });

        });
    } 

    else {

      
      if (Name.trim().length < 3){
        alert ('Tên ít Nhất 3 Ký Tự');
      } else if (Email.trim().length  < 5){
        alert ('Email ít Nhất 5 Ký Tự');
      } else if (Password.trim().length < 5){
        alert ('Mật khẩu ít Nhất 5 Ký Tự');
      } else {
        alert ('');
      }

      let Notification = new Load_Notification('Đăng Ký Thất Bại ', 2600);
      Notification.ADD_Notification();
    }
        

});
  