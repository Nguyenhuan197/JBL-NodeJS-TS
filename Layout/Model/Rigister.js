"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class Database_Register {
    constructor() {
        this.Save_Register = (Name, Email, Password, Callback) => {
            let Query_Add_User = `INSERT INTO nguoidung 
            (Quen, Ten, Email, Matkhau)
            VALUES (? , ? , ? , ?)
        `;
            Db_1.default.query(Query_Add_User, [1, Name, Email, Password], (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, { Name: Name, Email: Email });
                }
            });
        };
        this.Check_Register = (Email, Password, Callback) => {
            let Query_Login = `SELECT nguoidung.id AS ID_USER
            FROM nguoidung
            WHERE nguoidung.Email = ?
            AND  nguoidung.Matkhau = ?
        `;
            Db_1.default.query(Query_Login, [Email, Password], (error, Result) => {
                if (error) {
                    Callback(error, null);
                }
                else {
                    Callback(null, Result);
                }
            });
        };
    }
}
exports.default = Database_Register;
