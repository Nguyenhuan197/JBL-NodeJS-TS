
document.querySelector('#Check_Register_Form').addEventListener('submit', (event) => {
    event.preventDefault();
    const Name = document.querySelector('#Name_Register').value;
    const Email = document.querySelector('#Email_Register').value;
    const Password = document.querySelector('#Password_Register').value;


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
        localStorage.setItem('token', data.token); // Lưu Token vào LocalStorage
        console.log('Token đã lưu:', data.token);
    });
    


    
    // Loadding PUST API
    if (Name.trim().length > 1 && Email.trim().length > 1 && Password.trim().length > 1) {
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
        window.location.href = '/';
      })   
  
      .catch(error => {
        console.error('Error:', error);
      });

    } else {
      alert('Vui lòng nhập đủ dữ liệu vào Form!');
    }


});
  