import { Request, Response, NextFunction } from 'express';
import Category_Model from '../Model/Category'; 
import { error } from 'console';
let SQL: any = new Category_Model();

// View route handler
export const Views = (req: Request, res: Response, next: NextFunction) => {
    res.render('Category', {});
};

export const View_Category = (req: Request, res: Response, next: NextFunction) => {
    SQL.Views ((error : string , Result : any) => {
        if (error) return next (error);
        res.status(200).json(Result);
    });
}     

export const Data_Category = (req: Request, res: Response, next: NextFunction) => {
    SQL.View_Select_Category ((error : string , Result : any) => {
        if (error) return next (error);
        res.status(200).json(Result);
    });
}
        

export const Add = (req: Request, res: Response, next: NextFunction) => {
   let ID : number = req.body.ID_Category;
   let Name_Category : string = req.body.Name_Category;

   SQL.Add_News (ID , Name_Category , (error : string , Result : any) => {
        if (error) return next (error);
        res.send ('Thêm Danh Mục Thành Công');
    });
}


export const Delete = (req: Request, res: Response, next: NextFunction) => {
    let ID : number = parseInt(req.params.ID);
    SQL.Delete (ID , (error : string , Result : any) => {
        if (error) return next (error);
        res.send ('Xóa Danh Mục Thành Công');
    });
}


export const Upload = (req: Request, res: Response, next: NextFunction) => {
    let ID : number = req.body.ID_Category;
    let Name_Category : string = req.body.Name_Category;
    let ID_Edit : number = req.body.ID_Edit;

    SQL.Upload (ID , ID_Edit , Name_Category , (error : string , Result : any) => {
        if (error) return next (error);
        res.send ('Cập Nhật Danh Mục Thành Công');
    });
}

