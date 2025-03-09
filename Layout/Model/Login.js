"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class Database_Login {
    constructor() {
        this.Login = (Email, Password, Callback) => {
            let Query = `SELECT 
            nguoidung.id AS ID,
            nguoidung.Ten AS Name,
            nguoidung.Email AS Email

            FROM nguoidung
            WHERE nguoidung.Email = ?
                AND nguoidung.Matkhau = ?
                AND nguoidung.Trangthaitaikhoan = 2
        `;
            Db_1.default.query(Query, [Email, Password], (error, Result) => {
                if (error)
                    return Callback(error, null);
                Callback(null, Result);
            });
        };
    }
}
exports.default = Database_Login;
