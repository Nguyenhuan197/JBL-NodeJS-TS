"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class Database_Shopping_Cart {
    constructor() {
        this.Add = (SQL, Cookia, Callback) => {
            if (!SQL || !Array.isArray(SQL)) {
                return Callback("Dữ liệu không hợp lệ", null);
            }
            let now = new Date();
            let time = now.toLocaleString('vi-VN');
            console.log(time);
            let Truyvan = `INSERT INTO hoadon_c (ID_Khachhang , Tensp, Gia, Soluong, id_donhang, Tongtien , Time_) VALUES (?, ? , ?, ?, ?, ? , ?)`;
            SQL.forEach((item) => {
                Db_1.default.query(Truyvan, [
                    Cookia,
                    item['Name_Product'],
                    item['Price_Product'],
                    item['Count_Product'],
                    item['ID_Product'],
                    item['Price_Product'] * item['Count_Product'],
                    time
                ]);
            });
            Callback(null, "Thêm thành công tất cả sản phẩm vào database");
        };
    }
}
exports.default = Database_Shopping_Cart;
