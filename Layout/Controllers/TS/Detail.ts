
// import { error } from 'console';
import Detail from '../Model/Detail';

export const View_Detail = (req : any , res : any , next : any) => {
    res.render ('Detail', {});
}
   
   
export const View_Detail_API = (req: any, res: any, next: any) => {
    const ID: number = req.params.ID;
    const SQL: any = new Detail(ID);
    const Data_Detail: any = {};

    SQL.Load_Views((error: string, Result: string) => {
        if (error) return next(error);   
        Data_Detail.Show_Information = Result;   

        SQL.Load_IMG((error: string, Result: string) => {
            if (error) return next(error);
            Data_Detail.Show_IMG = Result;
        });
   

        SQL.Load_Product_Sell_More (ID ,(error : string , Result : any) => {
            if (error) return next(error);
            Data_Detail.Data_Product_Sell_More = Result;

            res.status(200).json({    
                Data_JSON : Data_Detail 
            });
        });
    });
  


};


