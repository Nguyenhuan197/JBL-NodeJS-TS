



  


// ---------------------------------------------------------------------------------------------------




console.log ('Test');

let Check_Status_Login_False = document.querySelector ("#Check_Status_Login_False");
let Check_Status_Login_True = document.querySelector ("#Check_Status_Login_True");

// let Check_Cookia = (Key) => {
//     let Check =  document.cookie.split('; ')
//         .find(row => row.startsWith(Key + '='))?.split('=')[1] || "";
//     return Check != '' ? true : false;
// }



// Get Token
let Check_Token = () => {
    const Token = localStorage.getItem('token');
    if (!Token) return false;

    fetch('/SaveToken/GETTOKEN', {
        method: 'GET',
        headers: { 'Authorization': Token }
    })
    
    .then(response => response.json())
    .then(SQL => {
        console.log(SQL.data);
        console.log(SQL.data.ID);
        View_Header (true);
    })

    .catch(err => {
        console.error("Lỗi xác minh Token:", err);
        View_Header (false);
    });
}






// View Token
let View_Header = (Check_Views) => {
    if (Check_Views){
        Check_Status_Login_True.style.display = "block";
        Check_Status_Login_False.style.display = "none";
    } else {
        Check_Status_Login_True.style.display = "none";
        Check_Status_Login_False.style.display = "block";
    }
}



Check_Token ();