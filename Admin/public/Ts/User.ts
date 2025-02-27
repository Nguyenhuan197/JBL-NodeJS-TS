
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
    console.log(Data);
    
    let View_User : any = (document.querySelector (".Box_Body_Conten"));
    let Name_Power , ID_Power;

    Data.forEach(element => {
        Name_Power =  element['Power'] == 1 ? 'khách hàng' : 'Admin';

        View_User.innerHTML += `
            <div class="Box">
                <img class="Cover" src="img/hình nền.png" alt="Cover Image">
                <div class="Content">
                    <img class="Avatar" src="${element['IMG']}" alt="Avatar Image">
                    <h2 class="Title" ><a href="#"  style="text-decoration: none;color: red;">${element['Name']}</a></h2>

                    <div style="font-size: 12px;">
                        <span>ID : ${element['ID']}</span><br><br>
                        <span>Email : ${element['Email']}</span><br><br>
                        <span>Phone : ${element['SDT']}</span><br><br>
                    </div>

                       
                        <span>Quền truy cập : ${Name_Power}</span><br><br>
                        <select name="" class="mySelect" onchange="Phanquen(${element['ID']})">
                            <option value="${element['Power']}">${Name_Power}</option>
                            <option value="1">Khách Hàng</option>
                            <option value="2">Admin</option>
                        </select><br><br>

                        <span  onclick="Delete_Power(${element['ID']})" style="color: red; font-size: 12px; font-weight: bold;"> Xóa Tài Khoản</span>
                </div>
            </div>
        `;

        Name_Power = '';
    });
}
    

const Phanquen = (Element : any) => {
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


const Delete_Power = (Element : any) => {
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
