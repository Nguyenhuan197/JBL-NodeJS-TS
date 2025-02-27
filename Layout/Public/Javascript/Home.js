
   

   
    class Loadding_API {
        Connect_API = async (API) => {
            if (API){
                try {
                    let Connect = await axios.get (API);
                    if (Connect.status === 200 && Connect.statusText == 'OK'){
                        Views_Data_API (Connect.data);
                    } 
                }

                catch (error) {
                    console.log ('Kết nối thất bại' + error);
                }
            } 
        }  
    }   

              
  
    const Views_Data_API = (Data) => {
        console.log (Data);

        document.querySelector ('._Khung__Danhmuc').innerHTML += `
            <section class="Danhmuc">
                <a href="#"><div class="Hinh_danhmuc"><img src="/Upload/Category/Loa.webp" alt=""></div><div class="Ten_Danhmuc"><span>Loa nghe nhạc</span></div></a>
                <div class="Menu_">
                    ${
                        Data.SQL_Header.Loanghenhac.map ((Value) => `
                            <p><a href="/Category/${Value['ID_Categorry']}">${Value['Name_Categorry']}</a></p>
                        `).join('')
                    }
                </div>
            </section>

            <section class="Danhmuc">
                <a href="#"><div class="Hinh_danhmuc"><img src="/Upload/Category/Tai nghe.webp" alt=""></div><div class="Ten_Danhmuc"><span>Tai nghe</span></div></a>
                <div class="Menu_">
                    ${
                        Data.SQL_Header.Tainghe.map ((Value) => `
                            <p><a href="/Category/${Value['ID_Categorry']}">${Value['Name_Categorry']}</a></p>
                        `).join('')
                    }   
                </div>
            </section>

            <section class="Danhmuc">
                <a href="#"><div class="Hinh_danhmuc"><img src="/Upload/Category/Am thanh gia dinh.webp" alt=""></div><div class="Ten_Danhmuc"><span>Âm thanh gia đình</span></div></a>
                <div class="Menu_">
                    ${
                        Data.SQL_Header.Amthanhgiadinh.map ((Value) => `
                            <p><a href="/Category/${Value['ID_Categorry']}">${Value['Name_Categorry']}</a></p>
                        `).join('')
                    }
                </div>
            </section>

            <section class="Danhmuc">
                <a href="#"><div class="Hinh_danhmuc"><img src="/Upload/Category/Gaming.webp" alt=""></div><div class="Ten_Danhmuc"><span>Sản phẩm Gaming</span></div></a>
                <div class="Menu_">
                    ${
                        Data.SQL_Header.Sanphamgaming.map ((Value) => `
                            <p><a href="/Category/${Value['ID_Categorry']}">${Value['Name_Categorry']}</a></p>
                        `).join('')
                    }
                </div>
            </section>

            <section class="Danhmuc">
                <a href="#"><div class="Hinh_danhmuc"><img src="/Upload/Category/Loa am thanh chuen nghiep.jpg" alt=""></div><div class="Ten_Danhmuc"><span>Âm thanh lớn</span></div>  </a>
                <div class="Menu_">
                    ${
                        Data.SQL_Header.Amthanhchuyennghiep.map ((Value) => `
                            <p><a href="/Category/${Value['ID_Categorry']}">${Value['Name_Categorry']}</a></p>
                        `).join('')
                    }
                </div>
            </section>
        `;


        // Sản phẩm Sale
        document.querySelector ('.Body_Sale_Center').innerHTML += `
            

            ${
                Data.SQL_Body.Data_Sale.map ((Value) =>  `
                    <a href="/Detail/${Value['ID']}">  
                        <div class="Sanpham_Sale">
                            <div class="Anhsp_Sale"><img src="${Value['IMG']}" alt=""></div>
                            <span>${Value['Name']}</span>
                            <div class="_Giasp_sale"><span>${Value['Price']}</span></div>
                        </div>
                    </a>
                `).join('')
            }
        `;


        // Top sản phẩm bán chạy
        // HOT_Product_Loa
        
        document.querySelector ("#View_Loa").innerHTML += `
            ${
                Data.SQL_Body.HOT_Product_Loa.map ((Value) => `
                    <a href="/Detail/${Value['ID']}">
                        <nav class="Sanphanbc">
                            <div class="Anh_sp_banchay"><img src="${Value['IMG']}" alt="${Value['IMG']}"></div>
                            <div class="Namesp_top_sp">${Value['Name']}</div>
                        </nav>
                    </a>
                
                `).join('')
            }
        `;



        document.querySelector ("#View_Gaming").innerHTML += `
           ${
                Data.SQL_Body.HOT_Product_Gamming.map ((Value) => `
                    <a href="/Detail/${Value['ID']}">
                        <nav class="Sanphanbc">
                            <div class="Anh_sp_banchay"><img src="${Value['IMG']}" alt="${Value['IMG']}"></div>
                            <div class="Namesp_top_sp">${Value['Name']}</div>
                        </nav>
                    </a>
                
                `).join('')
            }
        `;


        document.querySelector ("#View_Tainghe").innerHTML += `
              ${
                Data.SQL_Body.HOT_Product_Tainghe.map ((Value) => `
                    <a href="/Detail/${Value['ID']}">
                        <nav class="Sanphanbc">
                            <div class="Anh_sp_banchay"><img src="${Value['IMG']}" alt="${Value['IMG']}"></div>
                            <div class="Namesp_top_sp">${Value['Name']}</div>
                        </nav>
                    </a>
                
                `).join('')
            }
        `;



        // Sản phẩm Loa
        document.querySelector ('.Khung_Loa').innerHTML += `
            <div class="Nhom_sp_loa  Grup_Product_Loa">
                ${
                    Data.SQL_Body.Data_Loa.map ((Value) => `
                        <a href="/Detail/${Value['ID']}">
                            <div class="Bo_cuc_sp_loa  Condition_Slide_Click_Product"  >    
                                <div class="Anh_sp_Loa"><img src="${Value['IMG']}" alt=""></div>
                                <div class="Ten_sp_Loa"><span>${Value['Name']}</span></div>
                                <div class="Gia_Sp_Loa"><span>${Value['Price']}</span></div>
                                <div class="Congxuat_Loa"><span>4.2W</span></div>
                            </div>
                        </a>
                    `).join('')
                }
            </div>
        
            <div class="Thanh_chuyen">
                <div class="Muiten Phai" Expost_Slide_Product="Grup_Product_Tainghe"  value="Next_Box" onclick="Click_Slide(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></div>
                <div class="Muiten Trai" Expost_Slide_Product="Grup_Product_Tainghe"  value="Back_Box" onclick="Click_Slide(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg></div>
            </div>
        `;


        // Phần sản phẩm Tai nghe 
        document.querySelector (".Khung_Tainghe").innerHTML += `
            <div class="Nhom_sp_Tainge  Grup_Product_Tainghe">
                ${
                    Data.SQL_Body.Data_Tainghe.map((Value) => `
                        <a href="/Detail/${Value['ID']}">
                            <div class="Bo_cuc_sp_tainghe Condition_Slide_Click_Product">
                                <div class="Anh_sp_Tainghe"><img src="${Value['IMG']}" alt=""></div>
                                <div class="Ten_sp_Tainghe"><span>${Value['Name']}</span></div>
                                <div class="Gia_Sp_Tainghe"><span>${Value['Price']}</span></div>
                                <div class="Congxuat_Tainghe"><span>4.2W</span></div>
                            </div>
                        </a>
                    `).join('')
                }

              
            </div>
                
            <div class="Thanh_chuyen">
                <div class="Muiten Phai" Expost_Slide_Product="Grup_Product_Tainghe"  value="Next_Box" onclick="Click_Slide(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></div>
                <div class="Muiten Trai" Expost_Slide_Product="Grup_Product_Tainghe"  value="Back_Box" onclick="Click_Slide(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg></div>
            </div>        
        `;                

        //
        
        document.querySelector (".Khung_Gaming").innerHTML += `
            <div class="Nhom_sp_Gaming Grup_Product_Gaming">
                ${
                    Data.SQL_Body.Data_Gamming.map ((Value) => ` 
                     
                        <a href="/Detail/${Value['ID']}">
                            <div class="Bo_cuc_sp_gaming  Condition_Slide_Click_Product" >
                                <div class="Anh_sp_Gaming"><img src="${Value['IMG']}" alt=""></div>
                                <div class="Ten_sp_Gaming"><span>${Value['Name']}</span></div>
                                <div class="Gia_Sp_Gaming"><span>${Value['Price']}</span></div>
                                <div class="Congxuat_Gaming"><span>4.2W</span></div>
                            </div>
                        </a>
                 
                    `).join('')
                }
            </div>

            <div class="Thanh_chuyen">
                <div class="Muiten Phai" Expost_Slide_Product="Grup_Product_Gaming"  value="Next_Box" onclick="Click_Slide(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></div>
                <div class="Muiten Trai" Expost_Slide_Product="Grup_Product_Gaming"  value="Back_Box" onclick="Click_Slide(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg></div>
            </div>
        `;


        // Phần Loa
        document.querySelector (".Khung_Giadinh").innerHTML += `
            <div class="Nhom_sp_Giadinh Grup_Product_Loa_Giadinh">
                ${
                    Data.SQL_Body.Data_Loagiadinh.map ((Value) => `
                         <a href="/Detail/${Value['ID']}">
                            <div class="Bo_cuc_sp_Giadinh  Condition_Slide_Click_Product">
                                <div class="Anh_sp_Giadinh"><img src="${Value['IMG']}" alt=""></div>
                                <div class="Ten_sp_Giadinh"><span>${Value['Name']}</span></div>
                                <div class="Gia_Sp_Giadinh"><span>${Value['Price']}</span></div>
                                <div class="Congxuat_Giadinh"><span>4.2W</span></div>
                            </div>
                        </a>
                    `).join('')
                }
            </div>
            
            <div class="Thanh_chuyen">
                <div class="Muiten Phai" Expost_Slide_Product="Grup_Product_Loa_Giadinh"  value="Next_Box" onclick="Click_Slide(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></div>
                <div class="Muiten Trai" Expost_Slide_Product="Grup_Product_Loa_Giadinh"  value="Back_Box" onclick="Click_Slide(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/></svg></div>
            </div>
        `; 

    
        // Loadding Youtobe
        document.querySelector ('.Body_Video_Reviu').innerHTML += `
            ${
                Data.SQL_Body.Youtobe.map ((Value) => `
                    <section class="Khung_Video_Quangcao" Data-Value="${Value['URL']}" onclick="Load(this)">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
                            <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
                        </svg>
                        <img src="${Value['IMG']}" alt="">
                        <span>${Value['Title']}</span>
                    </section>

                `).join('')
            }

           
        `;

        
        
        let URL_Outpush_Time = document.querySelectorAll(".Time");
        setTimeout(() => {
            const Load_Time_Sale_ = new Load_Time_Sale (
                7,      // giờ 
                39,     // phút
                URL_Outpush_Time
            );  

            Load_Time_Sale_.Time_Sale();
        }, 100);


          // Load Money Vietnam 
        let Conversion_Money_Product__Sale = document.querySelectorAll("._Giasp_sale span");
        let Box_Monet_Product__Loa = document.querySelectorAll(".Gia_Sp_Loa span");
        let Box_Monet_Product__Tainghe = document.querySelectorAll(".Gia_Sp_Tainghe span");  
        let Box_Monet_Product__Gaming = document.querySelectorAll(".Gia_Sp_Gaming span");
        let Box_Monet_Product__Amthanhgiadinh = document.querySelectorAll(".Gia_Sp_Giadinh span");



        // sử dụng công nghệ bất đồng bộ Generator trong Emascrip ES6
        function* Load_Money_VN (){
            yield  Load_Much_Money_VIETNAM(Conversion_Money_Product__Sale);
                yield  Load_Much_Money_VIETNAM(Box_Monet_Product__Loa);
                    yield  Load_Much_Money_VIETNAM(Box_Monet_Product__Tainghe);
                yield  Load_Much_Money_VIETNAM(Box_Monet_Product__Gaming);
            yield  Load_Much_Money_VIETNAM(Box_Monet_Product__Amthanhgiadinh);

            return 'Done';
        }

        const Load_Money = Load_Money_VN ();    


        setTimeout(() => {
            Load_Money.next().value;
                Load_Money.next().value;
                    Load_Money.next().value;
                Load_Money.next().value;
            Load_Money.next().value;

            Load_Money.next().done; 
        }, 100); 
    }










    // Load Video 
    let Export_Youtube = document.querySelector(".Video_Danhgia iframe");
    let Display_Youtube = document.querySelector (".Video_Danhgia");
    const Load = (element) => {
        let Inpush_URL_Youtube = element.getAttribute('Data-Value');
        
        if (Inpush_URL_Youtube != '' && Inpush_URL_Youtube.length >= 61){
            const Load_Expost_Youtube_ = new Load_Expost_Youtube(
                Inpush_URL_Youtube,
                Export_Youtube,
                Display_Youtube 
            );

            Load_Expost_Youtube_.Expost_Youtobe();
        } 

        else {
            const Load_Nofication = new Load_Notification (
                "Lỗi Video 404" , 
                2600
            );
            Load_Nofication.ADD_Notification ();
        }
    }    


    Bovideo = () => {
        const Load_Expost_Youtube_ = new Load_Expost_Youtube(
            Inpush_URL_Youtube = 'EXIT',
            Export_Youtube,
            Display_Youtube 
        );

        Load_Expost_Youtube_.Expost_Youtobe();
    }    

 


    // // Load Money Vietnam 
    // let Conversion_Money_Product__Sale = document.querySelectorAll("._Giasp_sale span");
    // let Box_Monet_Product__Loa = document.querySelectorAll(".Gia_Sp_Loa span");
    // let Box_Monet_Product__Tainghe = document.querySelectorAll(".Gia_Sp_Tainghe span");  
    // let Box_Monet_Product__Gaming = document.querySelectorAll(".Gia_Sp_Gaming span");
    // let Box_Monet_Product__Amthanhgiadinh = document.querySelectorAll(".Gia_Sp_Giadinh span");



    // // sử dụng công nghệ bất đồng bộ Generator trong Emascrip ES6
    // function* Load_Money_VN (){
    //     yield  Load_Much_Money_VIETNAM(Conversion_Money_Product__Sale);
    //         yield  Load_Much_Money_VIETNAM(Box_Monet_Product__Loa);
    //             yield  Load_Much_Money_VIETNAM(Box_Monet_Product__Tainghe);
    //         yield  Load_Much_Money_VIETNAM(Box_Monet_Product__Gaming);
    //     yield  Load_Much_Money_VIETNAM(Box_Monet_Product__Amthanhgiadinh);

    //     return 'Done';
    // }

    // const Load_Money = Load_Money_VN ();    


    // setTimeout(() => {
    //     Load_Money.next().value;
    //         Load_Money.next().value;
    //             Load_Money.next().value;
    //         Load_Money.next().value;
    //     Load_Money.next().value;

    //     Load_Money.next().done; 
    // }, 100); 


    

    // Phần xử lý slide sản phẩm
    const Click_Slide = (Element) => {
        let Condition = Element.getAttribute("value");
        let Expost_Slide_Product = Element.getAttribute("Expost_Slide_Product");

            let Condition_Slide_Product = document.querySelector(".Bo_cuc_sp_Giadinh").offsetWidth + 10;
                let Grup_Product_Home = document.querySelector("." + Expost_Slide_Product);
                    let Count_Pruduct_Slide = Grup_Product_Home.children.length;
            
        let Load_Click_Slides = new Load_Click_Slide (
            Condition,
            Grup_Product_Home,
            Condition_Slide_Product,   // 125,
            Count_Pruduct_Slide
        );

        Load_Click_Slides.Condition_Click_Slide ();
    }


    let API = window.location.href;
    const Loadding = new Loadding_API ();
    Loadding.Connect_API (API + 'API');