import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Login_Model from "../Model/Login";
const crypto = require("crypto");
const SQL = new Login_Model();
const SECRET_KEY = "my_secret_key_Admin"; // Khai báo một lần

// View route handler
export const Views = (req: Request, res: Response, next: NextFunction) => {
    res.render("Login", {});
};



// mã hóa mật khẩu MD5
export const Loadding_Login = (req: Request, res: Response, next: NextFunction) => {
    const Email_Login: string = req.body.Email_Login;
    const Password_Login: string = req.body.Password_Login;

    if (!Email_Login || !Password_Login) {
        return res.status(400).json({ error: "Email và mật khẩu là bắt buộc!" });
    }

    
    const algorithm = "aes-256-cbc"; // Mã hóa AES-256-CBC
    const key = Buffer.from("0123456789abcdef0123456789abcdef"); // 32 bytes
    const iv = Buffer.from("abcdef9876543210"); // 16 bytes

    const MD5_Mahoa = (key: Buffer) => {
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(Password_Login, "utf8", "hex");
        encrypted += cipher.final("hex");
        return encrypted;
    };

    const MK_MD5 = MD5_Mahoa(key); // Dùng key cố định thay vì Password_Login
    SQL.Login(Email_Login, MK_MD5, (error: string, result: any) => {
        if (error) return next(error);
        res.send(result);
    });
};





// Save Token 
export const Save_Token = (req: Request, res: Response, next: NextFunction) => {
    const Email: string = req.body.Email;
    if (!Email){
        return res.status(400).json({ error: "Email là bắt buộc!" });
    }

    const token = jwt.sign({
            Email_Admin: Email,
            Status_Admin: 2,
        },
        SECRET_KEY,
        { expiresIn: "1h" }
    );

    res.json({ token });
};



  

// Kiểm tra Token
export const CheckToken = (req: Request, res: Response, next: NextFunction) => {
    const Data_Token = req.body.Token;
    
    try {
        let parts = Data_Token.split('.');
        if (parts.length !== 3) {
            throw new Error("Token không hợp lệ!");
        }

        let payload = JSON.parse(atob(parts[1]));
        res.send (payload);

    } catch (error) {
        res.status(401).json({ error: "Token không hợp lệ hoặc đã hết hạn!" });
    }
};
