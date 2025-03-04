

let Data_View_Category : any = null;

class Loadding_API_Category {
    View_Category = async (API : any) => {
        if (!API) return null;
        try {
            let Connect = await axios.get (API);
            if (Connect.status === 200 && Connect.statusText == 'OK'){
                Data_View_Category = Connect.data;
                let Form_Views : any = (document.querySelector ("#productList"));
                let Index_Category = 1;
                Connect.data.forEach(element => {
                    Form_Views.innerHTML +=  `
                        <tr>
                            <td>${Index_Category}</td>
                            <td>${element['Danhmuccha']}</td>
                            <td>${element['Danhmuccon']}</td>
                            <td><i value_Category=${Index_Category}  onclick="View_Upload_Category(this)" class="bi bi-pencil-square"></i></td>
                            <td><i onclick="Delete_Category(${element['ID']})" class="bi bi-x-lg"></i></td>
                        </tr>
                    `;

                   
                    Index_Category++;
                });
            }
        }

        catch (error) {
            console.log ('Kết nối thất bại' + error);
        }
    }  
  

    View_Select_Category = async (API : any) => {
        if (!API) return null;
        try {
            let Connect = await axios.get (API);
            if (Connect.status === 200 && Connect.statusText == 'OK'){
                let Form_Add : any = (document.querySelector (".Page_Category"));
                Connect.data.forEach(elements => {
                    Form_Add.innerHTML += `
                        <option value="${elements['ID']}">${elements['Name']}</option>
                    `;

                });
            }
        }

        catch (error) {
            console.log ('Kết danh mục  thất bại' + error);
        }
    }   

    
}   
   



   
// Thêm danh mục
let Trangthaichinhsưa : string = 'Views';
document.querySelector (".Check_Form_Products")?.addEventListener ('submit', (Event) => {
    Event.preventDefault();

    // Add Product
    if (Trangthaichinhsưa === 'Views'){
        let ID_Category : any = (document.querySelector (".Page_Category") as HTMLInputElement)?.value.trim();
        let Name_Category : any = (document.querySelector (".ProductInput") as HTMLInputElement)?.value.trim();
    
        if (ID_Category && Name_Category){
            fetch('/Category/Add', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },              
                body: JSON.stringify({
                    ID_Category : ID_Category,
                    Name_Category : Name_Category,
                })
              })   
          
            .then(response => response.text())  
            .then(data => {
                alert ("Thành Công" + data);
                window.location.href = '/Category';
            })   
        
            .catch(error => {
            console.error('Error:', error);
            });
            
        } else {
            alert ("Vui Lòng Nhập đủ Form");    
        }
    }



    // Edit Product
    else {
        let ID_Edit : any = (document.querySelector (".ID_UPLOAD") as HTMLInputElement)?.value.trim();
        let ID_Category : any = (document.querySelector (".Page_Category") as HTMLInputElement)?.value.trim();
        let Name_Category : any = (document.querySelector (".ProductInput") as HTMLInputElement)?.value.trim();

        if (ID_Category && Name_Category){
            fetch(`/Category/Upload/${ID_Edit}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },              
                body: JSON.stringify({
                    ID_Category : ID_Category,
                    Name_Category : Name_Category,
                })
              })   
          
            .then(response => response.text())  
            .then(data => {
                alert (data);
                window.location.href = '/Category';
            })   
        
            .catch(error => {
            console.error('Error:', error);
            });
            
        } else {
            alert ("Vui Lòng Nhập đủ Form  sửa");    
        }
    }


});


 

    
// View Edit 
let View_Upload_Category = (Event : any) => {
    Trangthaichinhsưa = 'Capnhat';
    // Dom 
    let Index_Edit : number = Event.getAttribute ("value_Category");
    let Tile_Submit : any= document.querySelector ("#Title_Submit");
    let Name : any = document.querySelector (".ProductInput");
    let Name_Category : any = document.querySelector ("#View_Default");
    let ID_Edit : any = document.querySelector (".ID_UPLOAD");

        Tile_Submit.innerHTML = 'Cập Nhật Danh Mục';
        Name.value = Data_View_Category[Index_Edit-1]['Name'];
        Name_Category.value =  Data_View_Category[Index_Edit-1]['ID_Danhmuc'];
        Name_Category.innerHTML =  Data_View_Category[Index_Edit-1]['Name_Danhmuc'];
        ID_Edit.value = Data_View_Category[Index_Edit-1]['ID'];


        console.log (Data_View_Category[Index_Edit-1]);
}



   

// Xóa danh mục
let Delete_Category = (ID_Delete : any) => {
    if (ID_Delete) {
        fetch(`/Category/${ID_Delete}`, {
            method: 'DELETE'
        })
        .then(response => response.text())
        .then(data => {
            alert ('Xóa Danh Mục Thành Công');
            window.location.href = '/Category';
        })
        .catch(error => console.error('Lỗi:', error));
    }
}




let Loaddings = new Loadding_API_Category ();
Loaddings.View_Category ('http://localhost:4000/Category/API_Views');
Loaddings.View_Select_Category ('http://localhost:4000/Category/API_Category');
   