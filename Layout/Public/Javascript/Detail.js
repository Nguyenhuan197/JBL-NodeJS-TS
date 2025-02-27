// const { json } = require("stream/consumers");
// 

let Copy_Data = null;
class Loadding_API {
    Check_Views_API = async (API) => {
        try {
            const Connect = await axios.get (API);
            if (Connect.status === 200 && Connect.statusText == 'OK'){
                console.log ('Có dữ liệu');
                Copy_Data = Connect.data;
                Views (Connect.data);
            }
        }

        catch (error) {
            console.error ('Lấy dữ liệu thất bại');
        }
    }
}


let Export_Slide_Product , Condition_Slide_Product, Count_Slide_Product ,Inpush_URL_Image_Product,Export_Image_Product;
let Views = (Data) => {
    console.log(Data);

    console.log (
        Data.Data_JSON.Show_Information[0]['IMG']
    );

    document.querySelector(".khung_anhsp").innerHTML += `
        <div class="Yotobe_" value="${Data.Data_JSON.Show_Information[0]['Youtobe']}" title="YouTube video player" onclick="Load_Youtobe(this)"><img src="/Image/youtube.svg" alt=""></div>
        <div class="Anhssp_"><img src="${Data.Data_JSON.Show_Information[0]['IMG']}" alt=""></div>

        <div class="Khungdieuhuong_trai" Data-value="Back_Box" onclick="Condition(this)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
            </svg>
        </div>


        <div class="khungsp_con">
            <nav class="Khung_anh_conn">
                ${
                    Data.Data_JSON.Show_IMG.map((Value) => `
                        <div class="anhsp_con_"><img src="${Value['IMG']}" alt="${Value['IMG']}${Value['IMG']}"></div>
                    `).join('')
                }
            </nav>
        </div>


        <div class="Khungdieuhuong_phai" Data-value="Next_Box" onclick="Condition(this)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
            </svg>
        </div>
    `;


    let View_Product_Sell_More = document.querySelector (".Box_Chay_sanpham");
    Data.Data_JSON.Data_Product_Sell_More.forEach(Value => {
        View_Product_Sell_More.innerHTML += `
            <a href="/Detail/${Value['ID']}">
                <section class="Box_Sanpham_Goiy">
                    <div class="Image_Sanphamtuongtu">
                        <img src="${Value['IMG']}" alt="">
                    </div>
                    <span class="Tensp_Tuongtu">${Value['Name']}</span>
                    <span class="Giasp_Tuongtu">${Value['Price']}đ</span>
                </section>
            </a>
        `;
    });




    Export_Slide_Product = document.querySelector(".Khung_anh_conn");
    Condition_Slide_Product = document.querySelector(".anhsp_con_").offsetWidth + 8;
    Count_Slide_Product = Export_Slide_Product.children.length;
    Inpush_URL_Image_Product = document.querySelectorAll(".anhsp_con_ img");
    Export_Image_Product = document.querySelector(".Anhssp_ img");


    //  sự kiện load ảnh khi hover vào 
    var Khung_Image = document.querySelectorAll(".anhsp_con_");
    Khung_Image.forEach (Hinhanh => {
        Hinhanh.addEventListener ('mouseover', function(){
            var KQ_Image = Hinhanh.querySelector('img').src;
            document.querySelector(".Anhssp_ img").src = KQ_Image;
        });
    });
         

    
    // Box2
    document.querySelector ("#View_Name_Product").innerHTML += `
        <span class="Tensp_">${Data.Data_JSON.Show_Information[0]['Name_Product']}</span>
        <span class="Dabansoluong">Sold : <span>12</span></span>
        <span class="Tieudegiaban">Selling Price :</span>
        <span class="Money">${Data.Data_JSON.Show_Information[0]['Price']}</span>
        <span class="Money_cu"><del>?? giá giảm</del></span>
    `;


    // xử lý Tăng giảm số lượng và chuyển đổi tiền viêt 
    var Money = document.querySelector(".Money").innerHTML;
    var View_SL = document.querySelector(".SL_");
    var SL = 1 , SUM_Money = 0;
    var Print_Product = document.querySelector(".Money");


    
    document.querySelector(".Tangsp").addEventListener ('click', () => {
        SL++;
        View_SL.innerHTML = SL;
        SUM_Money = Number(Money) * SL;
        Load_Money_VIETNAM (SUM_Money , Print_Product);
    });


    document.querySelector(".Giamsp").addEventListener ('click' , () => {
        if (SL > 1){ 
            SL--;
            View_SL.innerHTML = SL;
            SUM_Money = Number(Money) * SL;
            Load_Money_VIETNAM (SUM_Money , Print_Product);
        }
        else  alert ("SẢN PHẨM ÍT NHẤT LÀ 1");
    });


    const Load_Money_Product_Cu = () => {
        var Money_giacu = document.querySelector(".Money_cu del");
        let Money_giacu_Number = Number(Money_giacu.innerHTML);
        Load_Money_VIETNAM (Money_giacu_Number , Money_giacu);
    }


    //  Đăng phat triển đến đây ...    
    const Load_Money = () => {
        SUM_Money = Number(Money);
        Xuat_Money = SUM_Money.toLocaleString('vi-VN') + ' đ';
        return Xuat_Money;
    }

    document.querySelector(".Money").innerHTML = Load_Money();
}



const Condition = (Element) => {
    let Condition = Element.getAttribute("Data-value");

    if (Condition) {
        const Load_Slide = new Load_Click_Slide(
            Condition,
            Export_Slide_Product,
            Condition_Slide_Product,
            Count_Slide_Product
        );
        Load_Slide.Condition_Click_Slide();

        const Load_Click_Image = new Load_Image_Click(
            Condition,
            Inpush_URL_Image_Product,
            Export_Image_Product
        );
        Load_Click_Image.Condition_Image_Click();
    }


    // sự kiện nhấn vào xem video
    let Display_Youtobe = document.querySelector(".Video_Danhgia_Chitiet");
    let Duongxuat_Youtobe = document.querySelector(".Video_Danhgia_Chitiet iframe");


    const Load_Youtobe = (Element_Youtobe) => {
        let Duongdan_Youtube = Element_Youtobe.getAttribute("value");
        if (Duongdan_Youtube != '' && Duongdan_Youtube.length >= 61){
            const Load_Video_Youtube = new Load_Expost_Youtube (
                Duongdan_Youtube,
                Duongxuat_Youtobe,
                Display_Youtobe
            );

            Load_Video_Youtube.Expost_Youtobe();
        }
        
        else {
            const Load_Load_Notification = new Load_Notification (
                'Đường Dẫn Video Không Hợp Lệ 404',
                2000
            );
            
            Load_Load_Notification.ADD_Notification();
        }
    }


    // Chức năng bỏ video
    document.querySelector(".Bo_Video").addEventListener ('click', () => {
        const Load_Video_Youtube = new Load_Expost_Youtube (
            'EXIT',
            Duongxuat_Youtobe,
            Display_Youtobe
        );

        Load_Video_Youtube.Expost_Youtobe();
    });
}


  // Sự kiện nhấn thêm vào giỏ hàng
  document.querySelector(".giohang").addEventListener ('click', () => {
    let Count_Product =  Number (document.querySelector ("#Soluong_Sanpham").innerHTML);
    let ShoppingCart = {
        Name_Product: Copy_Data.Data_JSON.Show_Information[0]['Name_Product'],
        IMG_Product: Copy_Data.Data_JSON.Show_Information[0]['IMG'],
        Price_Product: Copy_Data.Data_JSON.Show_Information[0]['Price'],
        ID_Product: Copy_Data.Data_JSON.Show_Information[0]['ID'],
        Count_Product: Count_Product
    };

    let Data_Locostorage = JSON.parse(localStorage.getItem('Data_Shopping_Cart')) || [];
    if (Data_Locostorage){
        for (let I = 0 ; I < Data_Locostorage.length ; I++){
            if (ShoppingCart.ID_Product === Data_Locostorage [I].ID_Product){
                Data_Locostorage[I].Count_Product = Data_Locostorage[I].Count_Product + Count_Product;
                localStorage.setItem (
                    'Data_Shopping_Cart',
                    JSON.stringify(Data_Locostorage)
                );

                window.location.href = '/ShoppingCart';    
                return;
            }
        }

        Data_Locostorage.push (ShoppingCart);
        localStorage.setItem (
            'Data_Shopping_Cart',
            JSON.stringify(Data_Locostorage)
        ); 

    } else {
        console.log ('không có dữ liệu');
        localStorage.setItem (
            'Data_Shopping_Cart',
            JSON.stringify([ShoppingCart])
        );
    }   

    let Load_ADD_Notification = new Load_Notification("Thêm Vào Giỏ Hàng Thành Công",2300);
    Load_ADD_Notification.ADD_Notification();
    window.location.href = '/ShoppingCart';    
}); 
  



// Loadding Class API 
let GET_ID_API = window.location.href.split('/')[4];
const Loadding = new Loadding_API ();
Loadding.Check_Views_API ('http://localhost:3000/Detail/API/' + GET_ID_API);


// xử lý ẩn hiện xem thêm
let See_More_Detail = document.querySelector(".xemthem");

if (See_More_Detail){
    See_More_Detail.addEventListener("click", () => {
        let Height_Condition_See_Morre = document.querySelector(".Khung_chua_Vanbanchitiet_");

        const Load_See_More_Detail = new See_More_New (
            See_More_Detail,
            Height_Condition_See_Morre
        );
        Load_See_More_Detail.Condition_See_More_New();
    });
}


//  Load hiện thông tin thông số sản phẩm
const Load_Thongso_Sanpham = () => {
    var Box_Thongtin_Thongso = document.querySelector(".Khung_Thongso_sp");
    var Text_Thongtin_Kithuat = document.querySelector(".Thongtin_Kithuat");

    Box_Thongtin_Thongso.classList.toggle("Thaydoi");
    Text_Thongtin_Kithuat.classList.toggle("Thaydoi");
}


document.querySelector(".Xemthemthongso").addEventListener ('click', () => {
    Load_Thongso_Sanpham();
});

document.querySelector(".conThongtin").addEventListener ('click', () => {
    Load_Thongso_Sanpham();
});



// Load mau sac sản phẩm
let SELECT_COLOR = document.querySelectorAll(".Khung_color_");
let Vitri_Color;

    if (Vitri_Color == undefined){
        SELECT_COLOR[0].style.border = "5px solid rgb(194, 194, 194)";
    }

const Load_Mausac = (Element) => {
    Vitri_Color = Element.getAttribute("Pi");

    for (var i = 0 ; i < SELECT_COLOR.length ; i++){
        if (Vitri_Color == i){
            SELECT_COLOR[i].style.border = "5px solid rgb(194, 194, 194)";
                continue;
        }

        else {
            SELECT_COLOR[i].style.border = "5px solid white";
        }
    }
}





// Kiêm tra trạng thái bình luân khách hàng
class Danhgia_Khachhang {
    constructor (
            Count_Comen,
            Trangthai_cobinhluan,
            Trangthai_Chuabinhluan,
            Trang_Thai_Chưa_Coment,

            Display_Star_TB_Sao,
            Sl_Saokhachhangdanhgia
        ){

        this.Count_Comen = Count_Comen;
        this.Trangthai_cobinhluan = Trangthai_cobinhluan;
        this.Trangthai_Chuabinhluan = Trangthai_Chuabinhluan;
        this.Trang_Thai_Chưa_Coment = Trang_Thai_Chưa_Coment;

        this.Display_Star_TB_Sao = Display_Star_TB_Sao;
        this.Sl_Saokhachhangdanhgia = Sl_Saokhachhangdanhgia;
    }

    
    Display_View_Comen (){
        if (this.Count_Comen > 0){
            this.Trangthai_cobinhluan.style.display = "block";
                this.Trangthai_Chuabinhluan.style.display = "none";
                    document.querySelector(".Soluongdanhgia").innerHTML = this.Count_Comen + ' đánh giá';
        }

        else {
            this.Trangthai_cobinhluan.style.display = "none";
                this.Trangthai_Chuabinhluan.style.display = "block";

            for (let i = 0 ; i < this.Trang_Thai_Chưa_Coment.length ; i++){
                this.Trang_Thai_Chưa_Coment[i].innerHTML = '0 điểm';
            }
        }
    } 



      Display_Start_Khachhang (){
        let Display_Star_Khachhang = document.querySelectorAll (".Box_Khachhangbinhluan table");
        let SL_SAOO = document.querySelectorAll(".Sl_sao_K_hangdanhgia");

        for (let i = 0 ; i < this.Count_Comen ; i++){
            for (let y = 0 ; y < 5 ; y++){
                let Sao = Display_Star_Khachhang[i].querySelectorAll("tr td svg")[y];

                if (Number(SL_SAOO[i].innerHTML) > y){
                    Sao.style.fill = "red";
                }

                else {
                    Sao.style.fill = "white";
                }
            }
        }
    } 


    Display_Thongke_Star_SP (){
        let _1Star = 0 , _2Star = 0 , _3Star = 0 , _4Star = 0 , _5Star = 0;

        for (let i = 0 ; i < this.Count_Comen ; i++){
            var Star_Khachhang_Danhgia = Number(this.Sl_Saokhachhangdanhgia[i].innerHTML);
            if (Star_Khachhang_Danhgia == 1){ _1Star++;}
            if (Star_Khachhang_Danhgia == 2){ _2Star++;}
            if (Star_Khachhang_Danhgia == 3){ _3Star++;}
            if (Star_Khachhang_Danhgia == 4){ _4Star++;}
            if (Star_Khachhang_Danhgia == 5){ _5Star++;}
        }


        let Xuat_Thong_Ke_SL_Sao_SP = this.Trang_Thai_Chưa_Coment;
        let Star_Count = [_1Star , _2Star , _3Star , _4Star , _5Star];

        for (let y = 0 ; y < 5 ; y++){
            Xuat_Thong_Ke_SL_Sao_SP[y].innerHTML = y + 1 + ' Điểm ' + '(' + Star_Count[y] + ')';

            if (Star_Count[y] > 0){
                Xuat_Thong_Ke_SL_Sao_SP[y].style.color = "red";
            }
        }

    }




    Count_Star_TB_SP (){
        let Sum_SL_Sao = 0 , Count_TB = 0;

        if (this.Count_Comen > 0 ){
            for (let M = 0 ; M < this.Sl_Saokhachhangdanhgia.length ; M++){
                Sum_SL_Sao += Number(this.Sl_Saokhachhangdanhgia[M].innerHTML);
            }
                Count_TB = Sum_SL_Sao / this.Count_Comen;
        }

        // View hiển thị số lượng sao star Tb chung Product 
        document.querySelector(".Soluong_sao").innerHTML = Count_TB.toFixed(1);

        // VIEW TB STAR IMG
        for (let i = 0 ; i < this.Display_Star_TB_Sao.length ; i++){
            if (Count_TB > i ){
                this.Display_Star_TB_Sao[i].style.fill = "red";
            }
        }
    }

}



const Count_Comen = document.querySelectorAll(".Box_Binhluankhachhang_ table").length;
const Trangthai_Cobinhluan = document.querySelector(".Box_Khachhangbinhluan");
const Trangthai_Khongcobinhluan = document.querySelector(".Image_Trangthaichuabinhluan");
const Trang_Thai_Chưa_Coment = document.querySelectorAll(".Trangthaichua_cobinhluan");

const Display_Star_TB_Sao = document.querySelectorAll (".Start_ svg");
const Sl_Saokhachhangdanhgia = document.querySelectorAll(".Sl_sao_K_hangdanhgia");



const Data_Comen = new Danhgia_Khachhang(
    Count_Comen,
    Trangthai_Cobinhluan,
    Trangthai_Khongcobinhluan,
    Trang_Thai_Chưa_Coment,

    Display_Star_TB_Sao,
    Sl_Saokhachhangdanhgia
);


Data_Comen.Display_View_Comen();
Data_Comen.Count_Star_TB_SP();
Data_Comen.Display_Start_Khachhang();
Data_Comen.Display_Thongke_Star_SP();



// Chức năng hiển thị bình luận khách hàng 
class View_Comen_Product {
    constructor (Display_Binhluan){
        this.Display_Binhluan = Display_Binhluan;
    }

    Status_View_Display (Condition){
        this.Display_Binhluan.style.display = Condition ? "block" : "none";
    }
}



var Display_Binhluan = document.querySelector(".Gui_Danhgia");
const Status_Comen = new View_Comen_Product(Display_Binhluan);

document.querySelector('.Guidanhgiacuaban').addEventListener ('click', function(){  // on
    Status_Comen.Status_View_Display(true);
});

document.querySelector(".Bo_binhluankhachhang").addEventListener ('click', function(){  // off
   Status_Comen.Status_View_Display(false);
});




// Slode sản phẩm xem thêm 1                  
var Box_Sanphamxemthem = document.querySelector(".Box_Sanpham_Goiy");
var Kichthuoc_Box_Xemthem = document.querySelector(".Sanphamtuongtu").offsetWidth + 10;
var Soluong_Box_Xemthem = Box_Sanphamxemthem.children.length;


const Condition_Click = (Element) => {
    let Condition = Element.getAttribute("Condition");

    if (Condition && Condition == 'Next_Box' || Condition == 'Back_Box'){
        const Export_Slide_Detail = new Load_Click_Slide (
            Condition,
            Box_Sanphamxemthem,
            Kichthuoc_Box_Xemthem,
            Soluong_Box_Xemthem
        );
            Export_Slide_Detail.Condition_Click_Slide();
    }
}







Load_Money_Product_Cu();
Load_Money();
Load_Mau_Macdinh();