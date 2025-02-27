"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class Order_Model {
    constructor() {
        this.View_Data_Order = (Callback) => {
            let Query_API_Product = `SELECT  hoadon_c.id AS ID,
            hoadon_c.Tensp AS Name,
            hoadon_c.Time_ AS Time,
            sanpham.id AS ID_Donhang,    
            
            (SELECT nguoidung.Ten FROM nguoidung WHERE nguoidung.id = hoadon_c.ID_Khachhang ) AS Tenkhachhang,
            (SELECT nguoidung.Tinh_Thanhpho FROM nguoidung WHERE nguoidung.id = hoadon_c.ID_Khachhang) AS Diachikhachhang,
                
            hoadon_c.Soluong AS Count,
            hoadon_c.Tongtien AS Tongtien,
            hoadon_c.Trangthaidonhang AS Tinhtrang,
           	MIN(anhsp.IMG) AS IMG            
            FROM hoadon_c
            
            LEFT JOIN sanpham
                ON sanpham.id = hoadon_c.id_donhang
            LEFT JOIN anhsp
                ON sanpham.id = anhsp.idsp
                
            GROUP BY hoadon_c.id
        `;
            Db_1.default.query(Query_API_Product, (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Result);
                }
            });
        };
        this.Upload = (ID_Upload, Trangthai, Callback) => {
            let Query_Upload = `UPDATE hoadon_c 
            SET hoadon_c.Trangthaidonhang = ?
                WHERE hoadon_c.id = ?
        `;
            Db_1.default.query(Query_Upload, [Trangthai, ID_Upload], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
    }
}
exports.default = Order_Model;
