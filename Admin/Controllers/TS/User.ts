import { Request, Response, NextFunction } from 'express';
import USER_Model from '../Model/User'; 
import { error } from 'console';
let SQL: any = new USER_Model();   


// View route handler
export const Views = (req: Request, res: Response, next: NextFunction) => {
    res.render('User', {});
};    

export const View_API = (req: Request, res: Response, next: NextFunction) => {
    SQL.View_API ((error : string , Result : any) => {
        if (error) return next (error);
        res.status(200).json(Result);
    });

};         


export const Upload_Power = (req: Request, res: Response, next: NextFunction) => {
    let Power_Edit : number = req.body.Upload_Power;
    let ID_EDIT : number = req.body.ID_Edit;
    
    SQL.Upload_Power (Power_Edit , ID_EDIT , (error : string , Result : any) => {
        if (error) return next (error);
        res.send ('Thành Công');
    });
};     
    

export const Delete_Power =  (req: Request, res: Response, next: NextFunction) => {
    let ID_Delete_Power : number = req.params.Delete_Power;

    SQL.Delete_Power (ID_Delete_Power , (error : string , Result : any) => {
        if (error) return next (error);
        res.send ('Xóa Thành Công');
    });

}