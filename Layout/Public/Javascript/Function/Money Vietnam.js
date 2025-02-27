

const Load_Money_VIETNAM = (inpush_Money , Print_Money) => {
    inpush_Money = inpush_Money < 0 ? 0 : inpush_Money;
        const Export_Money = inpush_Money.toLocaleString('vi-VN') + ' đ';
            Print_Money.innerHTML = Export_Money;
}


 
var Load_Much_Money_VIETNAM = (inpush_Money) => {
    const Count = inpush_Money.length;

    for (let i = 0 ; i < Count; i++){
        let Export_Money = Number(inpush_Money[i].innerHTML);

        if (Number (inpush_Money[i].innerHTML) <= -1){
            inpush_Money[i].innerHTML = '0 đ';
                continue;
        } else {
            inpush_Money[i].innerHTML = Export_Money.toLocaleString('vi-VN') + ' đ';
        }
    }

} 

























// // Load Money Vietnam 
// let Conversion_Money_Product__Sale = document.querySelectorAll("._Giasp_sale span");
// let Box_Monet_Product__Loa = document.querySelectorAll(".Gia_Sp_Loa span");
// let Box_Monet_Product__Tainghe = document.querySelector(".Gia_Sp_Tainghe span");
// let Box_Monet_Product__Gaming = document.querySelector(".Gia_Sp_Gaming span");
// let Box_Monet_Product__Amthanhgiadinh = document.querySelector(".Gia_Sp_Giadinh span");



// const Load_Box_Money_Product_Sale = () => {
//     return new Promise((resolve) => { 
//         setTimeout(() => {
//             Load_Much_Money_VIETNAM(Conversion_Money_Product__Sale);
//                 resolve();
//         }, 121);
//     });
// }


// const Load_Box_Monet_Product__Loa = () => {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             Load_Much_Money_VIETNAM (Box_Monet_Product__Loa);
//                 resolve();
//         }, 312);
//     });
// }


// const Load_Box_Monet_Product__Tainghe = () => {
//     return new Promise ((resolve) => {
//         setTimeout(() => {
//             Load_Much_Money_VIETNAM (Box_Monet_Product__Loa);
//                 resolve();
//         }, 412);
//     });
// }




// async function Load__Moneys_VIETNAM() {
//     try {
//         console.log("Đang lấy dữ liệu...");

//         await Load_Box_Money_Product_Sale(); // Đợi sau khi resolve trả về thì mới tiếp tục chạy
//         await Load_Box_Monet_Product__Loa();
//         await Load_Box_Monet_Product__Tainghe ();
//         // await Load_Box_Monet_Product__Gaming ();
//         // await Load_Box_Monet_Product__Amthanhgiadinh ();

//         console.clear();

//     } catch (error) {
//         console.error("Có lỗi xảy ra:", error);
//     }
// }

// Load__Moneys_VIETNAM();

