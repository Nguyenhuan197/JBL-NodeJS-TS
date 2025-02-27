let Display_Shopping_Cart = document.querySelector("#View_Shoping_Cart");

const View = (Data) => {

    if (Data.length) {
        console.log (Data);
        let Index_Sopping_Carrt = 0;

        Data.forEach((element , Index) => {
            Display_Shopping_Cart.innerHTML += `
             <nav class="Product_Cart">
                <div class="Check_Product"><input type="checkbox" value="${element['ID_Product']}" ></div>
                <div class="Image_Product">
                    <a href="/Detail/${element['ID_Product']}">
                        <img src="${element['IMG_Product']}" alt="">
                    </a>
                </div>
                <span class="Name_Product_Cart">${element['Name_Product']}</span>
                <span class="Money_Groduct_Cart">${element['Price_Product']}</span>
                <span onclick="Delete(${Index})" class="Text_Delete_Product">Xóa</span>
                <div class="Delete_Product_Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </div>

                <div class="Box_Thongkesoluong">
                    <div class="Box_Tang_" index_Shopping_Carrt = "${Index}" value="${element['Count_Product']}" onclick="(Xuly_Tang(this))">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                    </div>

                    <div id="COUNT_Product_Shopping_Cart" class="Box_SL">${element['Count_Product']}</div>

                    <div class="Box_Giam" index_Shopping_Carrt = "${Index}" value="${element['Count_Product']}" onclick="(Xuly_Giam(this))">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                        </svg>
                    </div>
                </div>

                
            </nav>
            `;

            Index_Sopping_Carrt ++;
        });

    }
}

let Get_Locostorage = JSON.parse(localStorage.getItem('Data_Shopping_Cart')) || []
View (Get_Locostorage);






let Arr_Check = [];
class Xuly_Chonsp {
    constructor(
        Value_Check,
        Sum,
        Money_Product,
        Xuat_Money,
        Locotion_Count_Product,
        Data_SSD_index_Product,
        Export_Money_Vietnam_Product
    ) {
        this.Value_Check = Value_Check;
        this.Sum = Sum;
        this.Money_Product = Money_Product;
        this.Xuat_Money = Xuat_Money;
        this.Locotion_Count_Product = Locotion_Count_Product;
        this.Data_SSD_index_Product = Data_SSD_index_Product;
        this.Export_Money_Vietnam_Product = Export_Money_Vietnam_Product;
    }
   



    Upload_Check = () => {
        this.Value_Check.forEach((input, index) => {
            input.addEventListener('change', (event) => {
                if (Arr_Check.includes(index)) {
                    Arr_Check = Arr_Check.filter(item => item !== index);
                } else {
                    Arr_Check.push(index);
                }
    

                console.log(Arr_Check);
                this.Update_Loaction_Product(index, event.target.checked);
            });
        });
    };
   
  
   
    // Fell API
    Fell_API = (Data_Locostorage) => {
        let Fill_Check_Data = [];
        for (let Y = 0 ; Y < Data_Locostorage.length ; Y++){
            for (let X = 0 ; X < Arr_Check.length ; X++){
                if (Y == Arr_Check[X]){
                    Fill_Check_Data.push (Data_Locostorage[Y]);
                }
            }
        }


         // GET _ Cookia _ Khách hàng
        let cookieValue = document.cookie.split('; ')
        .find (row => row.startsWith('USER_TRUE' + '='))?.split('=')[1] || "";



        fetch('/ShoppingCart/Add_Pay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                Data_Pay: Fill_Check_Data ,
                Cookia : cookieValue
            }) 
        })
    

        .then(response => response.json())
        .then(result => {
            window.location.href = '/ShoppingCart';
        })       
        .catch(error => {
            alert ("Thanh Toán Thành Công");
            window.location.href = '/ShoppingCart';
        });
    }


    Update_Loaction_Product = (index, Trangthai) => {
        if (Trangthai) {
            if (!this.Data_SSD_index_Product.includes(index)) {
                this.Data_SSD_index_Product.push(index);
                this.Handle_Data(index, true);
            }
        } else {
            this.Data_SSD_index_Product = this.Data_SSD_index_Product.filter(item => item !== index);
            this.Handle_Data(index, false);
        }
    }


    // Xử lý tổng tiền sản phẩm  
    Handle_Data = (index, Trangthai) => {
        const Money_On_Check = Number(this.Money_Product[index].innerHTML);
        const Count_On_Check = Number(this.Locotion_Count_Product[index].innerHTML);

        if (Trangthai === true) {
            this.Sum += Money_On_Check * Count_On_Check;
        } else if (Trangthai === false) {
            this.Sum -= Money_On_Check * Count_On_Check;
        } else if (Trangthai === 'Update_Tang_') {
            this.Sum += Money_On_Check;
        } else if (Trangthai === 'Update_Giam_') {
            this.Sum -= Money_On_Check;
        }

        this.Load_Money_VIETNAM(this.Sum, this.Xuat_Money);
    }


    increase_Count = (Vitri) => {
        console.log ('Nhấn : ' + Vitri);
    }


    reduce_Count = (Vitri) => {
        let Count_Product_ = Number(this.Locotion_Count_Product[Vitri].innerHTML);
        if (Count_Product_ > 1) {
            this.Locotion_Count_Product[Vitri].innerHTML = --Count_Product_;
            this.Handle_Data(Vitri, 'Update_Giam_');
        }
    }

    Load_Money_VIETNAM = (sum, outputElement) => {
        outputElement.innerHTML = sum.toLocaleString('vi-VN') + ' đ';
    }
}




let Value_Check = document.querySelectorAll(".Check_Product input");
let Money_Product = document.querySelectorAll(".Money_Groduct_Cart");
let Xuat_Money = document.querySelector(".Tongsotien");
let Sum = 0;
let Locotion_Count_Product = document.querySelectorAll(".Box_SL");
let Data_SSD_index_Product = [];
let Export_Money_Vietnam_Product = document.querySelectorAll(".Money_Groduct_Cart");

const Upload_Count_Checkck = new Xuly_Chonsp(
    Value_Check,
    Sum,
    Money_Product,
    Xuat_Money,
    Locotion_Count_Product,
    Data_SSD_index_Product,
    Export_Money_Vietnam_Product
);




// Tang giam sản phẩm
let View_Count = document.querySelectorAll (".Box_SL");
const Xuly_Tang = (Element) => {
    let Index_ = Element.getAttribute ("index_Shopping_Carrt");
    let Value_Count  = Number (View_Count[Index_].innerHTML);
        Value_Count++;
        View_Count[Index_].innerHTML = Value_Count;
}


const Xuly_Giam = (Element) => {
    let Index_ = Element.getAttribute ("index_Shopping_Carrt");
    let Value_Count  = Number (View_Count[Index_].innerHTML);

        if (Value_Count > 1){
            Value_Count--;
            View_Count[Index_].innerHTML = Value_Count;
                return;   
        } 

        alert ('Số lượng không ít nhất 1 sản phẩm');
}




// Chức năng xóa sản phẩm Locostorage
const Delete = (Element) => {   
    for (let I = 0 ; I < Get_Locostorage.length ; I++){
        if (Element == I){
            Get_Locostorage.splice (I , 1);
            localStorage.setItem ('Data_Shopping_Cart', JSON.stringify(Get_Locostorage));
            Display_Shopping_Cart.innerHTML = '';
            View (JSON.parse(localStorage.getItem('Data_Shopping_Cart')));
                return;
        }
    }

    alert ('Xóa Dữ Liệu Thất Bại');
}



Upload_Count_Checkck.Upload_Check();



// Chức năng copy mã 
const Copy_Code = (Elements) => {
    let Code = Elements.getAttribute("value");
    navigator.clipboard.writeText(Code);

    let Kiemtra = new Promise (
        function Kiemtra (DK1,DK2){
            if (Code != '' && Code.length > 5){
                DK1 ("Copy Code Thành Công");
            } else {
                DK2 ("Erro");
            }
        }
    );

    Kiemtra.then ((value) => {
        ADD_Notification (value , 2300);
    });
     
    Kiemtra.catch ((Error) => {
        ADD_Notification (Error , 3000);
    });
} 


// Nhấn đặt hàng 
document.querySelector (".Tienhanhdathang").addEventListener ('click', () => {
    let Loading = new Xuly_Chonsp ();
    Loading.Fell_API (Get_Locostorage);
});