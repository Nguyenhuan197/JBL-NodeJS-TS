import Database_Login from '../Model/Login';
let SQL_Login = new Database_Login();

export const View_Login = (req: any, res: any, next: any) => {
    res.render('Login', {});
}  
   
export const Check_Login = (req: any, res: any, next: any) => {
    let Email: string = req.body.Email;
    let Password: string = req.body.Password;


    // Mã hóa mật khẩu 2 chiều MD5
    const crypto = require('crypto');
    // Cấu hình thuật toán, key (32 byte) và IV (16 byte)
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
    
    let Password_KQ_MD5 : any = encrypt(Password);

       

    
    // Check Login 
    SQL_Login.Login (Email , Password_KQ_MD5, (error: string, Result: any) => {
        if (error) return next (error);

        if (Result.length >= 1){  
            let ID_USER: number = Result[0]['ID_USER'];
            res.cookie('USER_TRUE', ID_USER , { maxAge: 6000000, path: '/' });
            res.send ('Thanhcong');
        } 
    });

    
}
