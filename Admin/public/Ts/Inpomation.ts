


class Loadding_API_Inpomation {
    Connect_API = async (API : any) => {
        if (API){
            try {
                let Connect = await axios.get (API);
                if (Connect.status === 200 && Connect.statusText == 'OK'){
                    console.log (Connect.data);

                    View_Product_API (Connect.data);
                }
            }

            catch (error) {
                console.log ('Kết nối thất bại' + error);
            }
        } 
    }       
}   
              

let Connect_Data_Inpomation = new Loadding_API_Inpomation ();
Connect_Data_Inpomation.Connect_API ('http://localhost:4000/Inpomation/Views_API');

let Display = document.querySelector ("#View_Acounts");
let View_Product_API = (SQL) : void => {
    console.log (SQL);   
        
    SQL.Result.forEach((Element , Index) => {
        Display?.innerHTML += `
            <tr>
                <td>${Index}</td>
                <td><img src="${Element['IMG']}" alt="Product Image" class="ProductImage"></td>
                <td>${Element['Name']}</td>
                <td>${Element['Time']}</td>
                <td>${Element['Diachikhachhang']}</td>
                <td>${Element['Tenkhachhang']}</td>
                <td>${Element['Count']}</td>
                <td>${Element['Tongtien'] } đ</td>
                <td>
                    ${
                        Element['Tinhtrang'] == 1 ? "Đang Chuẩn Bị Hàng" : 
                        Element['Tinhtrang'] == 2 ? "Đăng Vận Chuyển" : 
                        Element['Tinhtrang'] == 3 ? "Giao Hàng Thành Công" : 
                            "Hủy Đơn Hàng"
                    }
                </td>
                <td><i onclick="Edit(this)" ID="${Element['ID']}"  Tinhtrang="${Element['Tinhtrang']}"  class="bi bi-pencil-square"></i></td>
            </tr>
        `;

    });
    
}


let View_ID : any = (document.querySelector ("#ID_Form"));
let ID_Value_Form = (document.querySelector ("#ID_OPTION") as HTMLInputElement);
let ID_Form : any = null;

let Edit= (Element : any) => {
    ID_Form = Element.getAttribute("ID");
    let Trangthaidonhang = Element.getAttribute ("Tinhtrang");
    let View_Chonsp : any = document.querySelector ("#Tinhtrangdangchon");
    View_ID?.innerHTML  = ID_Form;  
    ID_Value_Form.value = Trangthaidonhang;

        switch (Trangthaidonhang){
            case '1' :
                ID_Value_Form.innerHTML = 'Đăng Chuẩn Bị Hàng';
                View_Chonsp?.innerHTML = 'Đăng Chuẩn Bị Hàng';
            break

            case '2' : 
                ID_Value_Form.innerHTML = 'Đăng Vận Chuyển';
                View_Chonsp?.innerHTML = 'Đăng Vận Chuyển';
            break;

            case '3' : 
                ID_Value_Form.innerHTML = 'Giao Hàng Thành Công';
                View_Chonsp?.innerHTML = 'Giao Hàng Thành Công';
            break;
        }
}




document.querySelector ("#UPLOAD_FORM")?.addEventListener ("submit", Event => {
    Event.preventDefault();
        let ID_FORM : number = Number (ID_Form);
        let Trangthai : any = (document.querySelector ("#SOLUACHONTHAYDOI") as HTMLInputElement);

        if (ID_FORM && Trangthai){
            fetch('/Inpomation/Upload', {   
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'   
                },           
          
                body: JSON.stringify({
                    ID_FORM : ID_FORM, 
                    Trangthai : Trangthai.value 
                })
            })   
              
          
            .then(response => response.text())  
            .then(data => {
                alert ('Cập Nhật Thành Công');
                window.location.href = '/Inpomation';
                })   
        
            .catch(error => {
            console.error('Error:', error);
            });

        } else {
            alert ('Vui Lòng Chọn Sản Phẩm Trước Khi Cập Nhật');
        }

});