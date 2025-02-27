
const Kiemtra = () => {
    const ID = document.cookie.split('; ').find(row => row.startsWith('ID_USER='))?.split('=')[1] || "";
        return ID;
}


const Save_id_User = (ID) => {
    let Name_Key = "ID_USER=";
    let allCookies = document.cookie; 
    let Check_ID = allCookies.indexOf(Name_Key);
    
    if (Check_ID === -1) {
        document.cookie = Name_Key + ID + "; max-age=6000; path=/";
        console.log ("Tạo mới cookia thành công");
    } else {
        document.cookie = Name_Key + ID + "; max-age=6000; path=/";
        console.log("Cookie của bạn đã có: " + Name_Key + ID);
    }   
}



const Delete_Cookia = (ID) => {
    let Name_Key = "ID_USER=";
    let allCookies = document.cookie; 
    let Check_ID = allCookies.indexOf(Name_Key);
    
    if (Check_ID === -1) {
        document.cookie = Name_Key + "=" + "; max-age=5; path=/";
            console.log ("Tạo mới cookia thành công");
    } else {
        document.cookie = Name_Key + '=' + "; max-age=5; path=/";
            console.log("Cookie của bạn đã có: " + Name_Key + ID);
    }   
} 



// start === -1 là cách kiểm tra xem một chuỗi có chứa một phần tử (chuỗi con) hay không trong JavaScript.

// Khi bạn dùng phương thức indexOf để tìm vị trí của một chuỗi con trong một chuỗi khác, nó sẽ trả về:

// Vị trí đầu tiên (chỉ số) nơi chuỗi con xuất hiện trong chuỗi chính, nếu tìm thấy.
// -1 nếu chuỗi con không được tìm thấy trong chuỗi chính.