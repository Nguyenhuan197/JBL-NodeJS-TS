
let Check_Status_Login_False = document.querySelector ("#Check_Status_Login_False");
let Check_Status_Login_True = document.querySelector ("#Check_Status_Login_True");

let Check_Cookia = (Key) => {
    let Check =  document.cookie.split('; ')
        .find(row => row.startsWith(Key + '='))?.split('=')[1] || "";
    return Check != '' ? true : false;
}


let Status_USER = Check_Cookia ('USER_TRUE');
if (Status_USER){
    Check_Status_Login_True.style.display = "block";
    Check_Status_Login_False.style.display = "none";
} else {
    Check_Status_Login_True.style.display = "none";
    Check_Status_Login_False.style.display = "block";
}
