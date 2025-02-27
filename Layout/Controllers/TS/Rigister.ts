
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
   
    SQL_Register.Save_Register(Name, Email, Password, (error: string, Result: any) => {
        if (error) {
            return next(error);   
        } else {    
            SQL_Register.Check_Register(Email, Password, (error: string, result: any) => {
                if (error) {
                    return next(error);
                } else {
                    let ID_USER: any = result[0]['ID_USER'];
                    res.cookie('USER_TRUE', ID_USER , { maxAge: 6000000, path: '/' });
                    res.send ('Thành Công');
                }    
            });
        }
    });
};
  


