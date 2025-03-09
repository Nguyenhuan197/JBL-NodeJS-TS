"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login_Rigister = exports.View_Rigister_Router = void 0;
const Rigister_1 = __importDefault(require("../Model/Rigister"));
const View_Rigister_Router = (req, res, next) => {
    res.render('Register', {});
};
exports.View_Rigister_Router = View_Rigister_Router;
const Login_Rigister = (req, res, next) => {
    const SQL_Register = new Rigister_1.default();
    let Name = req.body.Name_Register;
    let Email = req.body.Email_Register;
    let Password = req.body.Password_Register;
    const crypto = require('crypto'); // Cấu hình thuật toán, key (32 byte) và IV (16 byte)
    const algorithm = 'aes-256-cbc';
    const key = Buffer.from('0123456789abcdef0123456789abcdef'); // 32 ký tự
    const iv = Buffer.from('abcdef9876543210'); // 16 ký tự
    // Hàm mã hóa     
    const encrypt = (text) => {
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    };
    let KQ_MD5_Pasword = encrypt(Password);
    SQL_Register.Save_Register(Name, Email, KQ_MD5_Pasword, (error, Result) => {
        if (error)
            return next(error);
        SQL_Register.Check_Register(Email, KQ_MD5_Pasword, (error, result) => {
            if (error)
                return next(error);
            let ID_USER = result[0]['ID'];
            res.cookie('USER_TRUE', ID_USER, { maxAge: 6000000, path: '/' });
            res.send('true');
        });
    });
};
exports.Login_Rigister = Login_Rigister;
