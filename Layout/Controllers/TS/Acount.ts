import { Request, Response, NextFunction } from 'express';
import Acount_Model from '../Model/Acount';
// import { getCookie } from 'typescript-cookie';
import { error } from 'console';
let Connect_Database : any = new Acount_Model ();
export const Views = (req: any, res: any, next: any) : void => {
    res.render('Acount', {});
}     

    
export const Loadding_API = (req: Request , res: Response, next: NextFunction) : void => {
    let ID_USER: number = Number (req.cookies.USER_TRUE); 
    Connect_Database.Loadding_Inpomation(ID_USER, (error: string, Results: string) => {
        if (error) return next (error);
        res.status(200).json({
            SQL_Inpomation: JSON.parse(Results) 
        });   
    });  
};            
     
export const Upload = (req: Request , res: Response, next: NextFunction) : void => {
    let ID : number = req.body.ID;  
    let Name : string = req.body.Name;
    let Email : string =  req.body.Email;
    let SDT : number =  Number(req.body.SDT);
    let Birthday : string = req.body.Birthday;
    let Thanhpho : string = req.body.Thanhpho;
    let Quan_Huyen : string = req.body.Quan_Huyen;
    let Phuongthixa : string = req.body.Phuongthixa;
    let Diachithem : string = req.body.Diachithem;

    Connect_Database.Upload (ID ,Name , Email , SDT , Birthday , Thanhpho , Quan_Huyen , Phuongthixa , Diachithem , (error : string , Result : any) => {
        if (error) return next (error);
        res.send ('Cập Nhật Thành Công');
    });
}     


export const Delete = (req: Request , res: Response, next: NextFunction) : void => {
    let ID_USER : number = Number (req.body.ID);
    Connect_Database.Delete (ID_USER , (error : string , Result : any) => {
        if (error) return next (error);
        res.send ('True');
    });
}
     