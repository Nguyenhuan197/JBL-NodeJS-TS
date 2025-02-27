
   
class Loadding_API {
    Connect_API = async (API : any) => {
        if (API){
            try {
                let Connect = await axios.get (API);
                if (Connect.status === 200 && Connect.statusText == 'OK'){
                    View_Product_API (Connect.data);
                }
            }

            catch (error) {
                console.log ('Kết nối thất bại' + error);
            }
        } 
    }       
}   

   

let Coppy_Data : any;
const View_Product_API = (Data: []): void => {
    Coppy_Data = Data.Data_Product;
    let Dom = document.querySelector("#productList");
    let Index : number = 1;
    let Trangthai ;

    console.log (Coppy_Data);
    
    Data.Data_Product.forEach(element => {
        let Trangthaisp : async = element['Trangthaisp'] == 1 ? 'Chưa Duyêt' : 'Đã Duyêt';

        Dom?.innerHTML += `
            <tr>
                <th>${Index}</th>
                <th>${element['Name']}</th>
                <th>${element['Price']}</th>
                <th>${element['Category']}</th>
                <th>${element['ID']}</th>
                <th><img src="${element['IMG']}" alt=""></th>
                <th>
                    <select name="" class="mySelect" onchange="Trangthaisanpham (${element['ID']})">
                        <option value="${element['Trangthaisp']}">${Trangthaisp}</option>
                        <option value="1">Chưa Duyệt</option>
                        <option value="2">Đã Duyệt</option>
                    </select><br><br>

                </th>
                <th><i onclick="View_Upload(this)" Value_Index = "${Index-1}" Value="${element['ID']}" class="bi bi-pencil-square"></i></th>
                <th><i onclick="Delete(this)" Value="${element['ID']}" class="bi bi-x-lg"></i></th>
            </tr>
        `;   

        Index ++;
        Trangthaisp = '';
    });   

        

};



const Trangthaisanpham = (Element) => {
    let Status_Product : any = (document.querySelector (".mySelect") as HTMLInputElement).value;
    let ID_Edit_Status : number = Element;
   
    fetch('/Product/EDIT_Quen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },           
               
        body: JSON.stringify({
            Status_Product : Status_Product,
            ID_Edit_Status : ID_Edit_Status
        })
    })   
      
    .then(response => response.text())  
    .then(data => {
        alert ('Cập Nhật Thành Công');
        window.location.href = '/Product';
    })   
  
    .catch(error => {
    console.error('Error:', error);
    });

}



let Delete = (Event: any) => {
    let ID_DELETE = Event.getAttribute("value");
    if (ID_DELETE) {
        fetch(`http://localhost:4000/Product/${ID_DELETE}`, {
            method: 'DELETE'
        })
        .then(response => response.text())
        .then(data => {
            alert ('Xóa Thành Công');
            window.location.href = '/Product';
        })
        .catch(error => console.error('Lỗi:', error));
    }
}
           


let Display_Adds : any = (document.querySelector ("#Add_Product"));
let Display_Edits : any = (document.querySelector ("#Edit_Product"));

let View_Upload = (Event : any) => {
    Connect_Cookia.Push_Cookia ('Edit');
    let Index = Event.getAttribute ("Value_Index");
    let Data_Upload = Coppy_Data[Index];

    let ID_Upload : any = (document.querySelector ('.ID_Upload'));
    let Name_Upload : any = (document.querySelector ('.Name_Upload'));
    let Price_Upload : any = (document.querySelector ('.Price_Upload'));
    
    ID_Upload.value = Data_Upload['ID'];
    Name_Upload.value = Data_Upload['Name'];
    Price_Upload.value = Data_Upload['Price'];


    Display_Adds.style.display = 'none';
    Display_Edits.style.display = 'block' ;
}

  
// Cookia Dom
class Check_Cookia  {
    GET_Cookia = (Key_Cookia : string) => {
        let cookieValue: string = document.cookie.split('; ')
        .find (row => row.startsWith(Key_Cookia + '='))?.split('=')[1] || "";
        return cookieValue;
    } 

    Push_Cookia = (Views : string) => {
        let date: Date =  new Date();
        date.setTime(date.getTime() + (3 * 1000));
        document.cookie = 'Router_View_Product=' + Views + '; expires=' + date.toUTCString() + '; path=/';
    }


    Display_Products = (Event : string) => {
        if (Event == 'Edit'){
            Display_Adds.style.display = 'none';
            Display_Edits.style.display = 'block' ;
        } else {
            Display_Adds.style.display = 'block';
            Display_Edits.style.display = 'none'; 
        }
    }

}



let Connect_Cookia = new Check_Cookia ();

window.onload = () => {
    let Views = Connect_Cookia.GET_Cookia ('Router_View_Product');
    Connect_Cookia.Display_Products (Views);
}


// Edỉt - Upload
document.getElementById("Upload_Product")?.addEventListener("submit", async function (e){
    e.preventDefault();
    let formData = new FormData();
    let fileInput = document.getElementById("IMG_News") as HTMLInputElement;
    let ID = (document.querySelector (".ID_Upload") as HTMLInputElement)?.value.trim();
    let Name = (document.querySelector(".Name_Upload") as HTMLInputElement)?.value.trim();
    let Price = (document.querySelector(".Price_Upload") as HTMLInputElement)?.value.trim();


    if (!fileInput.files?.length) {
        alert("Vui lòng chọn ảnh trước khi tải lên!");
        return;
    }

    if (!Name || !Price) {
        alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
        return;
    }

    // Thêm dữ liệu vào FormData
    formData.append ("ID", ID);
    formData.append("image", fileInput.files[0]);
    formData.append("Name", Name);
    formData.append("Price", Price);

    try {
        let uploadResponse = await fetch("/Product/Upload", {
            method: "POST",
            body: formData
        });


        window.location.href = '/Product';

    } catch (error) {
        console.error("Lỗi:", error);
        alert((error as Error).message);
    }
});




// ADD Product
document.getElementById("Add_Product")?.addEventListener("submit", async function (e){
    e.preventDefault();
    let formData = new FormData();
    let fileInput : any = document.getElementById("IMG_ADD") as HTMLInputElement;
    let Name : string = (document.querySelector(".Name_Add") as HTMLInputElement)?.value.trim();
    let Price : any = Number((document.querySelector(".Price_Add") as HTMLInputElement)?.value.trim());
    let Category : any = Number ((document.querySelector ('#Category_ADD') as HTMLInputElement)?.value.trim());


    if (!fileInput.files?.length) {
        alert("Vui lòng chọn ảnh trước khi tải lên!");
        return;
    }

    if (!Name || !Price) {
        alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
        return;
    }

    // Thêm dữ liệu vào FormData
    formData.append("image", fileInput.files[0]);
    formData.append("Name", Name);
    formData.append("Price", Price);
    formData.append ("Category", Category);

    try {
        let uploadResponse = await fetch("/Product/Add", {
            method: "POST",
            body: formData
        });

        window.location.href = '/Product';
    } catch (error) {
        console.error("Lỗi:", error);
        alert((error as Error).message);
    }
});




let API = window.location.href;
const Loadding = new Loadding_API ();
Loadding.Connect_API ('http://localhost:4000/Product/API');
