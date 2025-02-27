
// let Save_Data;
// const Save_Product = (Data_Search_Name_Product) => {
//     let Condition_Save = new Promise ((resolve , reject) => {
//         console.log ('Đăng tải lên ...');
//             if (Data_Search_Name_Product){
//                 resolve();
//             } else {
//                 reject();
//             }
//     });

//     Condition_Save 
//     .then (resolve => {
//         Save_Data = Data_Search_Name_Product;
//     })

//     .catch (reject => {
//         alert ('Cảnh Báo Lỗi');
//     });
// }




  

var Print_Display_Search = document.querySelector(".View_Search_Product");

const Handle_Seach_Prododuct = (Input) => {
    Print_Display_Search.innerHTML = '';
    let Status_Search = false;

    if (Input && Save_Data){
        for (let Z = 0 ; Z < Save_Data.length ; Z++){
            let Truyvan = Save_Data[Z];

            let Search_Name_Product = Truyvan[0];
            let Search_Image_Product = Truyvan[1];

            let KQ_Truyvan = Search_Name_Product.matchAll (new RegExp (Input , 'gi'));
            var Print_Seach = Array.from (KQ_Truyvan);


            if (Print_Seach != ''){    
                    Status_Search = true;
                let Name_Product = Print_Seach[0].input;
                let Image_Product =  Search_Image_Product;

                Print_Display_Search.innerHTML += `
                    <div class="Box_Display_Product_Search">
                        <div class="img_Search"><img src="${Image_Product}" alt=""></div>
                        <span class="Text_Search_Product">
                            ${Name_Product}
                        </span>
                    </div>   
                `;    
            } 
        }


        if (Status_Search == false){
            Print_Display_Search.innerHTML += `
                <span class="Not_Search">Không Tìm Thấy Sản Phẩm</span>
            `;
        }


    }
}



