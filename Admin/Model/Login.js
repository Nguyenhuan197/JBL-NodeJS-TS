"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Db_1 = __importDefault(require("../SQL/Db"));
class Login_Model {
    constructor() {
        this.Login = (Email, Password, Callback) => {
            let Query_Login = `SELECT nguoidung.id AS ID_USER
            FROM nguoidung
            WHERE nguoidung.Quen = ?
                AND nguoidung.Email = ?
                AND nguoidung.Matkhau = ?
        `;
            Db_1.default.query(Query_Login, [2, Email, Password], (error, Result) => {
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
exports.default = Login_Model;
