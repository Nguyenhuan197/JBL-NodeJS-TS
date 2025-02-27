import { Request, Response, NextFunction } from 'express';
import Order_Model from '../Model/Inpomation'; 
import { error } from 'console';
let SQL: any = new Order_Model();

// View route handler
export const Views = (req: Request, res: Response, next: NextFunction) => {
    res.render('Inpomation', {});
};


export const Views_API = (req: Request, res: Response, next: NextFunction) => {
    SQL.View_Data_Order ((error : string , Result : any) => {
        if (error) return next (error);
        res.status(200).json({ Result });
    });
};  
            


export const Upload = (req: Request, res: Response, next: NextFunction) => {
    let ID_Upload : number = req.body.ID_FORM;
    let Trangthai : number = req.body.Trangthai;

    SQL.Upload (ID_Upload , Trangthai , (error : string , Result : any) => {
        if (error) return next (error);
        res.send ("Cập Nhật Thành Công");
    });
};