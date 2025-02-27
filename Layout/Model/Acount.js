"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class Acount_Model {
    constructor() {
        this.Loadding_Inpomation = (ID_USER, Callback) => {
            let Query_Inpomation_User = `SELECT nguoidung.Ten AS Name,
            nguoidung.Email AS EMAIL,
            nguoidung.id AS ID_USER,
            nguoidung.SĐT AS SĐT,
            nguoidung.Diachi AS Diachi,
            nguoidung.IMG AS IMG,
            nguoidung.Gioitinh AS Gioitinh,
            nguoidung.Tinh_Thanhpho AS Thanhpho,
            nguoidung.Quan_huyen AS Quan_Huyen,
            nguoidung.Phuong_Thixa AS Phuong_Thixa 

            FROM nguoidung
            WHERE nguoidung.id = ?
        `;
            Db_1.default.query(Query_Inpomation_User, [ID_USER], (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, JSON.stringify(Result));
                }
            });
        };
        this.Upload = (ID = '', Name = '', Email = '', SDT, Thanhpho = '', Quan_Huyen = '', Phuongthixa = '', Diachithem = '', Callback) => {
            let Query_Upload = `UPDATE nguoidung
            SET nguoidung.Ten = ?,
            nguoidung.Email = ? ,
            nguoidung.SĐT = ?,
            nguoidung.Tinh_Thanhpho = ?,
            nguoidung.Quan_huyen = ?,
            nguoidung.Phuong_Thixa = ?,
            nguoidung.Diachithem = ?
            
                WHERE nguoidung.id = ?
        `;
            Db_1.default.query(Query_Upload, [Name, Email, SDT, Thanhpho, Quan_Huyen, Phuongthixa, Diachithem, ID], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
    }
}
exports.default = Acount_Model;
