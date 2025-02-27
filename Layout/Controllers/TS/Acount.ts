import { Request, Response, NextFunction } from 'express';
import Acount_Model from '../Model/Acount';
// import { getCookie } from 'typescript-cookie';
import { error } from 'console';
let Connect_Database : any = new Acount_Model ();

 
export const Views = (req: any, res: any, next: any) => {
    res.render('Acount', {});
}     

  
export const Loadding_API = (req: any, res: any, next: any) => {
    let ID_USER: any = Number (req.cookies.USER_TRUE); 
    Connect_Database.Loadding_Inpomation(ID_USER, (error: string, results: string) => {
        if (error) {
            next(error); 
        } else {
            res.status(200).json({
                SQL_Inpomation: JSON.parse(results) 
            });
        }
    });
};    

export const Upload = (req: any, res: any, next: any) => {
    let ID = req.body.ID;
    let Name  = req.body.Name;
    let Email =  req.body.Email;
    let SDT =  req.bodySDT;
    let Thanhpho = req.body.Thanhpho;
    let Quan_Huyen = req.body.Quan_Huyen;
    let Phuongthixa = req.body.Phuongthixa;
    let Diachithem = req.body.Diachithem;

    Connect_Database.Upload (ID ,Name , Email , SDT , Thanhpho , Quan_Huyen , Phuongthixa , Diachithem , (error : string , Result : any) => {
        if (error) return next (error);
        res.send ('Cập Nhật Thành Công');
    });
}     

     