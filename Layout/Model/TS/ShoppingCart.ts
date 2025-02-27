import Connect from '../SQL/Db';


class Database_Shopping_Cart {  
    Add = (SQL: any[] , Cookia : number , Callback: any) => {
        if (!SQL || !Array.isArray(SQL)) {
            return Callback("Dữ liệu không hợp lệ", null);
        }

        let now: Date = new Date();
        let time: string = now.toLocaleString('vi-VN');
        console.log(time);



        let Truyvan : string = `INSERT INTO hoadon_c (ID_Khachhang , Tensp, Gia, Soluong, id_donhang, Tongtien , Time_) VALUES (?, ? , ?, ?, ?, ? , ?)`;

        SQL.forEach((item) => {
            Connect.query (Truyvan , [
                Cookia,
                item ['Name_Product'],
                item['Price_Product'],
                item ['Count_Product'],
                item ['ID_Product'],
                item['Price_Product'] * item['Count_Product'],
                time
            ]);
        });


        Callback(null, "Thêm thành công tất cả sản phẩm vào database");
    };
}

export default Database_Shopping_Cart;


