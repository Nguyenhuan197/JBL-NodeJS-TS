  
const View = (Data) => {
    let View = document.querySelector ("#View_Shoping_Cart");
    Data.forEach(element => {
        View.innerHTML += `
         <nav class="Product_Cart">
            <div class="Check_Product"><input type="checkbox" value="1" ></div>
            <div class="Image_Product">
                <a href="/Detail/${element['ID_Product']}">
                    <img src="${element['IMG_Product']}" alt="">
                </a>
            </div>
            <span class="Name_Product_Cart">${element['Name_Product']}</span>
            <span class="Money_Groduct_Cart" >20000</span>
            <span class="Text_Delete_Product">Xóa</span>
            <div class="Delete_Product_Cart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </div>

            <div class="Box_Thongkesoluong">
                <div class="Box_Tang_"  value="1" onclick="(Xuly_Tang(this))">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>
                </div>

                <div class="Box_SL">${element['Count_Product']}</div>
                <div class="Box_Giam"  value="1" onclick="(Xuly_Giam(this))">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                    </svg>
                </div>
            </div>
        </nav>
        `;
    });




}

View (JSON.parse(localStorage.getItem('Data_Shopping_Cart')) || []);







// chức năng chọn sản phẩm
class Xuly_Chonsp {
    constructor(
        _Value_Check,
        _Sum ,_Money_Product ,
        _Xuat_Money,
        _Locotion_Count_Product,
        _Data_SSD_index_Product,
        _Export_Money_Vietnam_Product

    ){
        this._Value_Check = _Value_Check;
        this._Sum = _Sum;
        this._Money_Product = _Money_Product;
        this._Xuat_Money = _Xuat_Money;
        this._Locotion_Count_Product = _Locotion_Count_Product;
        this._Data_SSD_index_Product = _Data_SSD_index_Product;
        this._Export_Money_Vietnam_Product = _Export_Money_Vietnam_Product;
    }

     
    Upload_Check = () => {
        for (let i = 0; i < this._Value_Check.length; i++) {
            this._Value_Check[i].addEventListener('change', (event) => {
                if (event.target.checked === true && event.target.value) {
                    this.Update_Loaction_Product(Number(event.target.value), true);
                } 

                if (event.target.checked === false) {
                    this.Update_Loaction_Product(Number(event.target.value), false);
                }               
            });
        }
    }


    Update_Loaction_Product (Value_Index_Product , Trangthai){
        if (Trangthai == true){
            if (!this._Data_SSD_index_Product.includes(Value_Index_Product)) {
                this._Data_SSD_index_Product.push(Value_Index_Product);   
                this.Handle_Data(Value_Index_Product , true);
            }
        }
        if (Trangthai == false) {
            this._Data_SSD_index_Product = this._Data_SSD_index_Product.filter(
                item => item !== Value_Index_Product
            );
            this.Handle_Data(Value_Index_Product , false);
        }
    }   

    
    Handle_Data = (index, Trangthai) => {
        const Loading__ = (index, Trangthai) => {
            let Money_On_Check = Number(this._Money_Product[index].innerHTML);
            let Count_On_Check = Number(this._Locotion_Count_Product[index].innerHTML);

            if (Trangthai == true){
                this._Sum += Money_On_Check * Count_On_Check;
            }
                
            if (Trangthai == false){
                this._Sum -= Money_On_Check * Count_On_Check;
            }

            if (Trangthai == 'Update_Tang_'){
                this._Sum += Money_On_Check;
            }

            if (Trangthai == 'Update_Giam_'){
                this._Sum -= Money_On_Check;
            }

        Load_Money_VIETNAM (this._Sum , this._Xuat_Money);
    }
    

        if (Trangthai == 'Update_Tang'){
            for (let Y = 0 ; Y < this._Data_SSD_index_Product.length ; Y++){
                if (index == this._Data_SSD_index_Product[Y]){
                    Loading__ (this._Data_SSD_index_Product[Y], 'Update_Tang_');
                        return;
                }
            }
        }

        Loading__ (index , Trangthai);
    }

    increase_Count = (Vitri) => {
        let Count_Product_ = this._Locotion_Count_Product[Vitri].innerHTML;
        let Export_Count_Product = ++Count_Product_;
        
            this._Locotion_Count_Product[Vitri].innerHTML = Export_Count_Product;
                this.Handle_Data(Vitri,'Update_Tang');
    }

    reduce_Count = (Vitri) => {
        let Count_Product_ = this._Locotion_Count_Product[Vitri].innerHTML;
        if (Number(Count_Product_) > 1) {
            let Export_Count_Product = Number(--Count_Product_);
                this._Locotion_Count_Product[Vitri].innerHTML = Export_Count_Product;
                    this.Handle_Data(Vitri,'Update_Giam_');
        }
    }


    // Trạng Thái Ngưng hoạt động _ đăng phát triển thêm
    Load_Money_Product = () => {   
        for (let X = 0 ; X < this._Money_Product.length ; X++){
            let Money =  Number(this._Money_Product[X].innerHTML);
            // let Money = Number(this._Money_Product[X].innerHTML.replace(/[^\d]/g, ''));
            let Money_VN = Money.toLocaleString('vi-VN') + ' đ';
            this._Export_Money_Vietnam_Product[X].innerHTML = Money_VN;
        }
    }
    // 
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
    

const Xuly_Tang = (Element) => {
    let Vitri = Element.getAttribute("value");
    Upload_Count_Checkck.increase_Count(Vitri);
}

const Xuly_Giam = (Element) => {
    let Vitri = Element.getAttribute("value");
    Upload_Count_Checkck.reduce_Count(Vitri);
}


// Upload_Count_Checkck.Load_Money_Product();
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