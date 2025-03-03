
import { error, log } from 'console';
import Database_Register from '../Model/Rigister'; 
import { json } from 'stream/consumers';

export const View_Rigister_Router = (req: any, res: any, next: any) => {
    res.render('Register', {});
};

export const Login_Rigister = (req: any, res: any, next: any) => {
    const SQL_Register = new Database_Register ();
    let Name: string = req.body.Name_Register;
    let Email : string = req.body.Email_Register;
    let Password : string = req.body.Password_Register;

    const crypto = require('crypto'); // Cấu hình thuật toán, key (32 byte) và IV (16 byte)
    const algorithm = 'aes-256-cbc';
    const key = Buffer.from('0123456789abcdef0123456789abcdef'); // 32 ký tự
    const iv = Buffer.from('abcdef9876543210'); // 16 ký tự

    
    // Hàm mã hóa
    const encrypt = (text : string) => {
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
            return encrypted;
    }

    

    let KQ_MD5_Pasword : any = encrypt(Password);
    SQL_Register.Save_Register(Name, Email, KQ_MD5_Pasword, (error: string, Result: any) => {
        if (error)  return next(error);
        SQL_Register.Check_Register(Email, KQ_MD5_Pasword , (error: string, result: any) => {
            if (error) return next (error);
            let ID_USER: any = result[0]['ID_USER'];
            res.cookie('USER_TRUE', ID_USER , { maxAge: 6000000, path: '/' });
            res.send ('Thành Công');
        });
    });
};
  


