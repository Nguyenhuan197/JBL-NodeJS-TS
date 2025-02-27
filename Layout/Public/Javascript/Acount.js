
class Loadding_API {
    Connect_API = async (API) => {
        if (API){
            try {
                let Connect = await axios.get (API);
                if (Connect.status === 200  && Connect.statusText == 'OK'){
                    Views_API (Connect.data);
                }              
            }

            catch (error){
                console.log ('Kết nối thất bại' + error);
            }
        }
    }
}
   
let API = window.location.href;
let Loadding = new Loadding_API ();
Loadding.Connect_API (API + '/API');

   
const Views_API = (Data) => {   
    let Value_SQL = Data.SQL_Inpomation;
    console.log (Value_SQL)

    const Name = Value_SQL[0]['Name'].substring(0,5);
    document.querySelector (".Box_Menu").innerHTML += `
        <div class="Image_ID_USER"><img src="${Value_SQL[0]['IMG']}" alt=""></div>
        <span class="Name_User_ID"><span >Chào </span><span class="Name_US">${Name}</span></span>
        <span class="User_ID"><span>ID </span><span class="ID">${Value_SQL[0]['ID_USER']}</span></span>
    `;

    document.querySelector (".Box_Check_Image").innerHTML += `
        <div class="Image"><img src="${Value_SQL[0]['IMG']}" alt=""></div>
        <div class="Up_Image">
            <input type="file" id="Up_IMG">
        </div>
        <span class="Text_">Dung lượng tối đa là 1MB Định dạng ...PNG...JPEG</span>
    `;

    document.querySelector (".Form_Check").innerHTML += `
        <form id="Update_Json">

                <input type="hidden" id="ID_USER" value="${Value_SQL[0]['ID_USER']}">

            <label for="Check_Name">Name</label><br>
            <input type="text" name="Check_Name" value="${Value_SQL[0]['Name']}" class="Check_Name"><br><br>
                
            <label for="Check_Email">Email</label><br>
            <input type="text" name="Check_Email"  value="${Value_SQL[0]['EMAIL']}" class="Check_Mail"><br><br>

            <label for="Check_Number_Phone">Number Phone</label><br>
            <input type="text" name="Check_Number_Phone"  value="${Value_SQL[0]['SĐT']}" class="Check_Count_Call"><br><br>

            <label for="Check_Birthday">Birthday</label><br>
            <input type="date" name="Check_Birthday"  value="" class="Check_Birthday"><br><br>
            
           

            <div class="Check_Cyty">
                <select name="" id="City">
                    <option value="${Value_SQL[0]['Thanhpho']}">${Value_SQL[0]['Thanhpho']}</option>
                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                    <option value="Hà Nội">Hà Nội</option>
                </select>

                <select name="" id="District">
                    <option value="${Value_SQL[0]['Quan_Huyen']}">${Value_SQL[0]['Quan_Huyen']}</option>
                    <option value="Quận 12">Quận 12</option>
                    <option value="Quận 7">Quận 7</option>
                </select>

                <select name="" id="Ward_town">
                    <option value="${Value_SQL[0]['Phuong_Thixa']}">${Value_SQL[0]['Phuong_Thixa']}</option>
                    <option value="Hiệp Thành">Hiệp Thành</option>
                    <option value="Tân Chánh Hiệp">Tân Chánh Hiệp</option>
                </select>
            </div>

            <div class="Text_Condition_Acount">
                <label for="">Địa Chỉ Chi Tiết</label><br><br>
                <textarea name="note" rows="5" cols="48" id="Address_Detail" value=""></textarea>
            </div>

            <div class="Up"><button type="submit" >Cập Nhật</button></div>
            <div class="Delete_User">Delete User</div>
        </form>
    `;


    document.querySelector ("#Update_Json").addEventListener ('submit', (Event) => {
        Event.preventDefault ();
        let ID = document.querySelector ("#ID_USER").value;
        let Name = document.querySelector (".Check_Name").value;
        let Email = document.querySelector (".Check_Mail").value;
        let SDT = document.querySelector (".Check_Count_Call").value;
        let Thanhpho = document.querySelector ("#City").value;
        let Quan_Huyen = document.querySelector ("#District").value;
        let Phuongthixa = document.querySelector ("#Ward_town").value;
        let Diachithem  = document.querySelector ("#Address_Detail").value;


        fetch('/Acount/Upload', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },   

            body: JSON.stringify({
                ID : ID,
                Name : Name,
                Email: Email,
                SDT : SDT,
                Thanhpho : Thanhpho,
                Quan_Huyen : Quan_Huyen,
                Phuongthixa : Phuongthixa,
                Diachithem : Diachithem
            })
        })   


        .then(response => response.text())
        .then(data => {
            alert ('Đăng Nhập Thành Công');
            window.location.href = '/Acount';
        })
        .catch(error => {
            console.error("Có lỗi xảy ra: " + error);
        });




    });
}




