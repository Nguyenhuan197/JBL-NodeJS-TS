import { Request, Response, NextFunction } from 'express';
import Login_Model from '../Model/Login'; 
import { error } from 'console';
let SQL: any = new Login_Model();

// View route handler
export const Views = (req: Request, res: Response, next: NextFunction) => {
    res.render('Login', {});
};


export const Loadding_Login = (req : Request , res : Response , next : NextFunction) => { 
    let Name_Login : string = req.body.Email_Login;
    let Email_Login : string = req.body.Password_Login;

    SQL.Login (Name_Login , Email_Login ,(error : string , Result : any) => {
        if (error){
            return next (error);
        }  else {
            if (Result.length == 1){
                res.send ('True');
            } else {
                res.send ('False');
            }
        }
    });
}   