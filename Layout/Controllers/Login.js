"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check_Login = exports.View_Login = void 0;
const Login_1 = __importDefault(require("../Model/Login"));
let SQL_Login = new Login_1.default();
const View_Login = (req, res, next) => {
    res.render('Login', {});
};
exports.View_Login = View_Login;
const Check_Login = (req, res, next) => {
    let Email = req.body.Email;
    let Password = req.body.Password;
    // Mã hóa mật khẩu 2 chiều MD5
    let encrypt = (text) => {
        const crypto = require('crypto'); // Cấu hình thuật toán, key (32 byte) và IV (16 byte)
        const algorithm = 'aes-256-cbc';
        const key = Buffer.from('0123456789abcdef0123456789abcdef'); // 32 ký tự
        const iv = Buffer.from('abcdef9876543210'); // 16 ký tự
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    };
    // Check Login 
    SQL_Login.Login(Email, encrypt(Password), (error, Result) => {
        if (error)
            return next(error);
        if (Result.length >= 1) {
            let ID_USER = Result[0]['ID'];
            res.cookie('USER_TRUE', ID_USER, { maxAge: 6000000, path: '/' });
            return res.send(ID_USER.toString());
        }
        return res.send('False');
    });
};
exports.Check_Login = Check_Login;
