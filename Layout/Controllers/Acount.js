"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload = exports.Loadding_API = exports.Views = void 0;
const Acount_1 = __importDefault(require("../Model/Acount"));
let Connect_Database = new Acount_1.default();
const Views = (req, res, next) => {
    res.render('Acount', {});
};
exports.Views = Views;
const Loadding_API = (req, res, next) => {
    let ID_USER = Number(req.cookies.USER_TRUE);
    Connect_Database.Loadding_Inpomation(ID_USER, (error, results) => {
        if (error) {
            next(error);
        }
        else {
            res.status(200).json({
                SQL_Inpomation: JSON.parse(results)
            });
        }
    });
};
exports.Loadding_API = Loadding_API;
const Upload = (req, res, next) => {
    let ID = req.body.ID;
    let Name = req.body.Name;
    let Email = req.body.Email;
    let SDT = req.bodySDT;
    let Thanhpho = req.body.Thanhpho;
    let Quan_Huyen = req.body.Quan_Huyen;
    let Phuongthixa = req.body.Phuongthixa;
    let Diachithem = req.body.Diachithem;
    Connect_Database.Upload(ID, Name, Email, SDT, Thanhpho, Quan_Huyen, Phuongthixa, Diachithem, (error, Result) => {
        if (error)
            return next(error);
        res.send('Cập Nhật Thành Công');
    });
};
exports.Upload = Upload;
