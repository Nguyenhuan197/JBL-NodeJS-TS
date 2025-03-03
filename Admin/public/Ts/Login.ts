
document.querySelector ('#Click_Submit')?.addEventListener ('submit' , (Event : any) => {
  Event.preventDefault ();
  const Email_ADMIN_Login : string = (document.querySelector ("#EMAIL_ADMIN") as HTMLInputElement).value;
  const Password_ADMIN_Login : any = (document.querySelector ("#PASSWORD_ADMIN") as HTMLInputElement).value;

  // Fell Check _ API
  if (Email_ADMIN_Login.trim().length > 1 && Password_ADMIN_Login.trim().length > 1){
    fetch('/Login', {
      method: 'POST',   
      headers: {
        'Content-Type': 'application/json'
      },           
                
      body: JSON.stringify({
        Email_Login : Email_ADMIN_Login, 
        Password_Login :  Password_ADMIN_Login
      })   
    })   
    
    .then(response => response.text())  
    .then(data => {
      if (data.length === 2){
        alert ('Đăng Nhập Thất Bại');  
        window.location.href = '/';
      } else {
        SAVE_Token (Email_ADMIN_Login);
      }
    })   

    .catch(error => {
      console.error('Error:', error);
    });
  }
});



let SAVE_Token  = (Email : string) => {
  fetch ('/AddToken' , {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body : JSON.stringify ({
      Email : Email,
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
}


