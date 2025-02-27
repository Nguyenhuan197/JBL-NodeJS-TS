
   

let  Connect_API_Menu = async (API) => {
    try {
        let Connect = await axios.get (API);
        if (Connect.status === 200 && Connect.statusText == 'OK'){
            let Data = Connect.data.Data_Header;
            // console.log (Data.Loanghenhac);

            
            document.querySelector ('._Khung__Danhmuc').innerHTML += `
            <section class="Danhmuc">
                <a href="#"><div class="Hinh_danhmuc"><img src="/Upload/Category/Loa.webp" alt=""></div><div class="Ten_Danhmuc"><span>Loa nghe nhạc</span></div></a>
                <div class="Menu_">
                    ${
                        Data.Loanghenhac.map ((Value) => `
                            <p><a href="/Category/${Value['ID_Categorry']}">${Value['Name_Categorry']}</a></p>
                        `).join('')
                    }
                </div>
            </section>

            <section class="Danhmuc">
                <a href="#"><div class="Hinh_danhmuc"><img src="/Upload/Category/Tai nghe.webp" alt=""></div><div class="Ten_Danhmuc"><span>Tai nghe</span></div></a>
                <div class="Menu_">
                    ${
                        Data.Tainghe.map ((Value) => `
                            <p><a href="/Category/${Value['ID_Categorry']}">${Value['Name_Categorry']}</a></p>
                        `).join('')
                    }   
                </div>
            </section>

            <section class="Danhmuc">
                <a href="#"><div class="Hinh_danhmuc"><img src="/Upload/Category/Am thanh gia dinh.webp" alt=""></div><div class="Ten_Danhmuc"><span>Âm thanh gia đình</span></div></a>
                <div class="Menu_">
                    ${
                        Data.Amthanhgiadinh.map ((Value) => `
                            <p><a href="/Category/${Value['ID_Categorry']}">${Value['Name_Categorry']}</a></p>
                        `).join('')
                    }
                </div>
            </section>

            <section class="Danhmuc">
                <a href="#"><div class="Hinh_danhmuc"><img src="/Upload/Category/Gaming.webp" alt=""></div><div class="Ten_Danhmuc"><span>Sản phẩm Gaming</span></div></a>
                <div class="Menu_">
                    ${
                        Data.Sanphamgaming.map ((Value) => `
                            <p><a href="/Category/${Value['ID_Categorry']}">${Value['Name_Categorry']}</a></p>
                        `).join('')
                    }
                </div>
            </section>

            <section class="Danhmuc">
                <a href="#"><div class="Hinh_danhmuc"><img src="/Upload/Category/Loa am thanh chuen nghiep.jpg" alt=""></div><div class="Ten_Danhmuc"><span>Âm thanh lớn</span></div>  </a>
                <div class="Menu_">
                    ${
                        Data.Amthanhchuyennghiep.map ((Value) => `
                            <p><a href="/Category/${Value['ID_Categorry']}">${Value['Name_Categorry']}</a></p>
                        `).join('')
                    }
                </div>
            </section>
        `;

        } 
    }

    catch (error) {
        console.log ('Kết nối thất bại' + error);
    }
}  

Connect_API_Menu ('http://localhost:3000/Category/API_Category');














        
class Loadding_API {
    Connect_API = async (API) => {
        if (API){
            try {
                let Connect = await  axios.get (API);
                if (Connect.status === 200 && Connect.statusText === 'OK'){
                    Views_Database (Connect.data);
                }
            }

            catch (error){
                console.log ('Có lỗi xảy ra  : ' + error);
            }   


        } else {
            alert ('Không có API');
        }
    }

    Connect_API_Fill = async (API) => {
        if (API){
            try {
                let Connects = await  axios.get (API);
                if (Connects.status === 200 && Connects.statusText === 'OK'){
                    console.log ('Thành Công Nha');
                    console.log (Connects.data);
                }
            }

            catch (error){
                console.log ('Có lỗi xảy ra  : ' + error);
            }


        } else {
            alert ('Không có API');
        }
    }
}



const Views_Database = (Data) => {
    document.querySelector (".Contion_Dom_Category").innerHTML += `
        <span class="Text_navigation">Trang Chủ - Sale Tháng 1 - ${Data.Data_Category[0]['Name_Category']}</span>
    `;

    let Display = document.querySelector (".Container_Box_Product_Category");
    Data.Data_Category.forEach(Value => {
        Display.innerHTML += `
            <nav class="Box_Product">
                <a href="/Detail/${Value['ID']}">
                    <div class="Filter" style="display: none;"><span class="Filter_Money">3980000</span></div>   
                    <div class="image_Product"><img src="${Value['IMG']}" alt=""></div>
                    <span class="Name_Product_Categorry">${Value['Name']}</span>
                    <span class="Price_Product_Category">${Value['Price']}</span>
                    <span class="Pridce_Reduce_Product"><del>???</del></span>
                    <span class="Capacity_Product_Category">4.2 W</span>
                    <div class="Box_Star">
                        <div class="icon_STAR_Product_Category"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg></div>
                        <div class="icon_STAR_Product_Category"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg></div>
                        <div class="icon_STAR_Product_Category"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg></div>
                        <div class="icon_STAR_Product_Category"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg></div>
                    </div>
                    <span class="Text_Compere">So Sánh</span>
                    <div class="Check_Radio_compare_Product"><input index_Checks="0" onclick="Check_Compare(this)" type="checkbox"></div>
                </a>
            </nav>        
        `;
    });


    // Load Money
    let Money_Product_Category = document.querySelectorAll(".Price_Product_Category");
    let Del_Money_Product_Category = document.querySelectorAll(".Pridce_Reduce_Product del");

    function* Load_Money_Category (){
        yield  Load_Much_Money_VIETNAM (Money_Product_Category);
        yield  Load_Much_Money_VIETNAM (Del_Money_Product_Category);
            return 'Done';
    }

    const Load_Money = Load_Money_Category();
    setTimeout(() => {
        Load_Money.next().value;
        Load_Money.next().value;
            Load_Money.next().done;
    }, 100);
   
}



// sự kiện xem thêm bài viết 
const Button_Click_News_Product = document.querySelector(".Botton_See_More_Product");
if (Button_Click_News_Product){
    Button_Click_News_Product.addEventListener ('click', () => {
    let Height_Condition_See_Morre = document.querySelector (".Box_Text_News_Product_Category");

    const Load_See_More_New = new See_More_New(
        Button_Click_News_Product,
        Height_Condition_See_Morre
    );
    
        Load_See_More_New.Condition_See_More_New();
    });
}
     
 

    let Money_Start = document.querySelector (".Money_Start");
    let Money_End = document.querySelector (".Money_End");
    let Value_Fill = null , Max_Price = null , Min_Price = null;

    const Value_Filter = (Event) => {
        Value_Fill = Event.value;
        console.log (Value_Fill);

        switch (Value_Fill){
            case '10' : 
                Money_Start.innerHTML = '0đ'; Money_End.innerHTML = '500.000 đ';
                Max_Price = 500000; Min_Price = 0;
            break;

            case '20': 
                Money_Start.innerHTML = '500.000 đ';Money_End.innerHTML = '1.000.000 đ';
                Max_Price = 1000000; Min_Price = 500000;
            break;

            case '30': 
                Money_Start.innerHTML = '1.000.000 đ';Money_End.innerHTML = '1.500.000 đ';
                Max_Price = 1500000; Min_Price = 1000000;
            break;

            case '40': 
                Money_Start.innerHTML = '1.500.000 đ';Money_End.innerHTML = '2.000.000 đ';
                Max_Price = 2000000; Min_Price = 1500000;
            break;

            case '50': 
                Money_Start.innerHTML = '2.000.000 đ';Money_End.innerHTML = '2.500.000 đ';
                Max_Price = 2500000; Min_Price = 2000000;
            break;

            case '60': 
                Money_Start.innerHTML = '2.500.000 đ';Money_End.innerHTML = '3.000.000 đ';
                Max_Price = 3000000;  Min_Price = 2500000;
            break;

            case '70': 
                Money_Start.innerHTML = '3.000.000 đ';Money_End.innerHTML = '3.500.000 đ';
                Max_Price = 3500000; Min_Price = 3000000;
            break;

            case '80': 
                Money_Start.innerHTML = '3.500.000 đ';Money_End.innerHTML = '4.000.000 đ';
                Max_Price = 4000000; Min_Price = 3500000;
            break;

            case '90': 
                Money_Start.innerHTML = '4.000.000 đ';Money_End.innerHTML = '4.500.000 đ';
                Max_Price = 4500000; Min_Price = 4000000;
            break;

            case '100': 
                Money_Start.innerHTML = '4.500.000 đ';Money_End.innerHTML = '5.000.000 đ';
                Max_Price = 5000000; Min_Price = 4500000;
            break;
          
        }
    }     


    let API = window.location.href.split('/')[4];
    let Loadding_APIs = new Loadding_API ();


    document.querySelector (".Button_Apply_Filter").addEventListener ("click", () => {
        let URL =  'http://localhost:3000/Category/API_Fill/' + Min_Price + '/' + Max_Price;
        window.location.href = URL;
    }); 


    


    Loadding_APIs.Connect_API ('http://localhost:3000/Category/API/' + API);