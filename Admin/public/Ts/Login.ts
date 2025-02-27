
document.querySelector ('#Click_Submit')?.addEventListener ('submit' , (Event : any) => {
  Event.preventDefault ();
  const Email_ADMIN_Login : string = (document.querySelector ("#EMAIL_ADMIN") as HTMLInputElement).value;
  const Password_ADMIN_Login : string = (document.querySelector ("#PASSWORD_ADMIN") as HTMLInputElement).value;

  if (Email_ADMIN_Login.trim().length > 1 && Password_ADMIN_Login.trim().length > 1){
    fetch('/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },           
             
      body: JSON.stringify({
        Email_Login : Email_ADMIN_Login, 
        Password_Login : Password_ADMIN_Login 
      })
    })   
    

    .then(response => response.text())  
    .then(data => {
        if (data == 'True'){
          alert ('Đăng Nhập Thành Công');
          window.location.href = '/Admin';

        } else {
          alert ('Đăng Nhập Thất Bại');
        }
      
    })   

    .catch(error => {
      console.error('Error:', error);
    });


  }



});


