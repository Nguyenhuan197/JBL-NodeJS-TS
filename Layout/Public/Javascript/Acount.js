
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
            <input type="date" name="Check_Birthday" class="Birthday"  value="" class="Check_Birthday"><br><br>
           

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
           
        </form>

        <div class="Delete_User" id="DELETE_ACOUNT">Delete User</div>
    `;




    document.getElementById("Address_Detail").value = Value_SQL[0]['DC_CUTHE'];
    // Dịnh dạng ngày sinh
    let birthDate = new Date(Value_SQL[0]['Birthday']);
    let formattedDate = birthDate.toISOString().slice(0, 10);
    document.querySelector(".Birthday").value = formattedDate;

    document.querySelector ("#Update_Json").addEventListener ('submit', (Event) => {
        Event.preventDefault ();
        let ID = document.querySelector ("#ID_USER").value;
        let Name = document.querySelector (".Check_Name").value.trim();
        let Email = document.querySelector (".Check_Mail").value.replace(/\s+/g, '');
        let SDT = document.querySelector (".Check_Count_Call").value.replace(/\s+/g, '');
        let Birthday = document.querySelector (".Birthday").value;
        let Thanhpho = document.querySelector ("#City").value;
        let Quan_Huyen = document.querySelector ("#District").value;
        let Phuongthixa = document.querySelector ("#Ward_town").value;
        let Diachithem  = document.querySelector ("#Address_Detail").value.trim();

        fetch('/Acount/Upload', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                ID : ID.trim(),
                Name : Name.trim(),
                Email: Email.trim(),
                SDT : SDT.trim(),
                Birthday : Birthday,
                Thanhpho : Thanhpho,
                Quan_Huyen : Quan_Huyen,
                Phuongthixa : Phuongthixa,
                Diachithem : Diachithem
            })
        })   

  
        .then(response => response.text())
        .then(data => {
            alert ('Cập Nhật Thành Công');
            window.location.href = '/Acount';
        })
        .catch(error => {
            console.error("Có lỗi xảy ra: " + error);
        });
    });
    
    // DELETE Acount
    document.querySelector ("#DELETE_ACOUNT").addEventListener ('click', () => {
        let ID_USER = document.cookie.match(new RegExp('(^| )' + 'USER_TRUE' + '=([^;]+)'));
        if (!ID_USER[2]) return alert ('Tài Khoản Không Tồn Tại');

        fetch('/Acount/Delete', {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ ID : ID_USER[2]})
        })      

        .then(response => response.text())
        .then(data => {
            if (data != 'True') return alert ('Xóa Tài Khoản Thất Bại');
            document.cookie = 'USER_TRUE' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            localStorage.removeItem ("token");
            alert ('Xóa Tài Khoản Thành Công');
            window.location.href = '/';
        })

        .catch(error => {
            console.error("Có lỗi xảy ra: " + error);
        });

    });

}


