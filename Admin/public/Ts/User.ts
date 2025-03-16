
class Loadding_API_USER {
    Connect_API = async (API : any) => {
        if (API){
            try {
                let Connect = await axios.get (API);
                if (Connect.status === 200 && Connect.statusText == 'OK'){
                    View_Product_API_USER (Connect.data);
                }
            }

            catch (error) {
                console.log ('Kết nối thất bại' + error);
            }
        } 
    }  
}   
    

    
let View_Product_API_USER = (Data : any) => {    
    let View_User : any = (document.querySelector ("#productList"));
    let Name_Power : string  , Status_User : string;

    Data.forEach((element : any , Index : number) => {
        Name_Power =  element['Power'] == 1 ? 'khách hàng' : 'Admin';
        Status_User = element['Status_User'] == 1 ? 'Dừng Hoạt Động' : 'Đăng Hoạt Động';

        View_User.innerHTML += `
            <tr>
                <td>${Index}</td>
                <td>${element['ID']}</td>
                <td><img class="Avatar" src="${element['IMG']}" alt="Avatar Image"></td>
                <td>${element['Name']}</td>
                <td> ${element['Email']}</td>
                <td>${element['SDT']}</td>
                <td>
                    <select name="" class="mySelect" onchange="Phanquen(${element['ID']})">
                        <option value="${element['Power']}">${Name_Power}</option>
                        <option value="1">Khách Hàng</option>
                        <option value="2">Admin</option>
                    </select><br><br>
                </td>
                 <td>
                    <select name="" class="mySelect" onchange="Status_User(${element['ID']})">
                        <option value="${element['Status_User']}">${Status_User}</option>
                        <option value="2">Hoạt Động</option>
                        <option value="1">Dừng Hoạt Động</option>
                    </select><br><br>
                </td>
                <td><i class="bi bi-x"></i></td>
            </tr>
        `;

        Name_Power = '';
    });

}
    

let Phanquen = (Element : any) => {
    let Values_Power : any = (document.querySelector (".mySelect") as HTMLInputElement).value;
    let ID_Edit : number = Element;
   
    fetch('/User/EDIT_Power', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },           
               
        body: JSON.stringify({
            Upload_Power : Values_Power,
            ID_Edit : ID_Edit
        })
    })   
      
    .then(response => response.text())  
    .then(data => {
        alert ('Cập Nhật Thành Công');
        window.location.href = '/User';
    })   
  
    .catch(error => {
    console.error('Error:', error);
    });
}





let Delete_Power = (Element : any) => {
    if (Element){
        fetch(`/User/${Element}`, {
            method: 'DELETE'
        })

        .then(response => response.text())
        .then(data => {
            alert ('Xóa Thành Công');
            window.location.href = '/User';
        })
        .catch(error => console.error('Lỗi:', error));
    }
}




const Loadding_User = new Loadding_API_USER ();
Loadding_User.Connect_API ('http://localhost:4000/User/Api');
