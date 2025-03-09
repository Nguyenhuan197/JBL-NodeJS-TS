"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckToken = exports.Save_Token = exports.Loadding_Login = exports.Views = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Login_1 = __importDefault(require("../Model/Login"));
const crypto = require("crypto");
const SQL = new Login_1.default();
const SECRET_KEY = "my_secret_key_Admin"; // Khai báo một lần
// View route handler
const Views = (req, res, next) => {
    res.render("Login", {});
};
exports.Views = Views;
// mã hóa mật khẩu MD5
const Loadding_Login = (req, res, next) => {
    const Email_Login = req.body.Email_Login;
    const Password_Login = req.body.Password_Login;
    if (!Email_Login || !Password_Login) {
        return res.status(400).json({ error: "Email và mật khẩu là bắt buộc!" });
    }
    const algorithm = "aes-256-cbc"; // Mã hóa AES-256-CBC
    const key = Buffer.from("0123456789abcdef0123456789abcdef"); // 32 bytes
    const iv = Buffer.from("abcdef9876543210"); // 16 bytes
    const MD5_Mahoa = (key) => {
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(Password_Login, "utf8", "hex");
        encrypted += cipher.final("hex");
        return encrypted;
    };
    const MK_MD5 = MD5_Mahoa(key); // Dùng key cố định thay vì Password_Login
    SQL.Login(Email_Login, MK_MD5, (error, result) => {
        if (error)
            return next(error);
        res.send(result);
    });
};
exports.Loadding_Login = Loadding_Login;
// Save Token 
const Save_Token = (req, res, next) => {
    const Email = req.body.Email;
    if (!Email) {
        return res.status(400).json({ error: "Email là bắt buộc!" });
    }
    const token = jsonwebtoken_1.default.sign({
        Email_Admin: Email,
        Status_Admin: 2,
    }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
};
exports.Save_Token = Save_Token;
// Kiểm tra Token
const CheckToken = (req, res, next) => {
    const Data_Token = req.body.Token;
    try {
        let parts = Data_Token.split('.');
        if (parts.length !== 3) {
            throw new Error("Token không hợp lệ!");
        }
        let payload = JSON.parse(atob(parts[1]));
        res.send(payload);
    }
    catch (error) {
        res.status(401).json({ error: "Token không hợp lệ hoặc đã hết hạn!" });
    }
};
exports.CheckToken = CheckToken;
