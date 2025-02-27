import { Request, Response, NextFunction } from 'express';
// import Login_Model from '../Model/Login'; 
import { error } from 'console';
// let SQL: any = new Login_Model();

// View route handler
export const Views = (req: Request, res: Response, next: NextFunction) => {
    res.render('Statistical', {});
};
       