import { Request, Response, NextFunction } from 'express';
import Home from '../Model/Home'; // Inpost Class Home bên kia - Model
import { error } from 'console';
let SQL: any = new Home(); 

// View route handler
export const Views = (req: Request, res: Response, next: NextFunction) => {
    res.render('Home', {});
};


// API route handler
export const Loadding_API = (req: Request, res: Response, next: NextFunction) => {
    let Data_Home: any = {};
    let Data_Header: any = {};

    SQL.Category_Loanghenhac((error: string, Result: any) => {
        if (!error) {
            Data_Header.Loanghenhac = Result;
        } else {
            return next(error);
        }
    });

    SQL.Category_Tainghe((error: string, Result: any) => {
        if (!error){
            Data_Header.Tainghe = Result;
        } else {
            return next(error);
        }
    });
   

    SQL.Category_Amthanhgiadinh((error: string, Results: any) => {
        if (!error) {
            Data_Header.Amthanhgiadinh = Results;
        } else {
            return next(error);
        }
    });

    SQL.Category_Sanphamgaming((error: string, Result: any) => {
        if (!error) {
            Data_Header.Sanphamgaming = Result;
        } else {
            return next(error);
        }
    });

    SQL.Categotry_Amthanhchuyennghiep((error: string, Result: any) => {
        if (!error) {
            Data_Header.Amthanhchuyennghiep = Result;
        } else {
            return next(error);
        }
    });


    
    // Data - Main
    SQL.Sale_Price((error: string, Result: any) => {
        if (!error) {
            Data_Home.Data_Sale = Result;
        } else {
            return next(error);
        }
    });
    


    SQL.TopSP_Banchay_Loa ((error : string , Result : any) => {
        if (error) return next (error);
        Data_Home.HOT_Product_Loa = Result;
    });

    SQL.TopSP_Banchay_Tainghe ((error : string , Result : any) => {
        if (error) return next (error);
        Data_Home.HOT_Product_Tainghe = Result;
    });


    SQL.TopSP_Banchay_Gamming ((error : string , Result : any) => {
        if (error) return next (error);
        Data_Home.HOT_Product_Gamming = Result;
    });




    SQL.Loadding_Loa((error: string, Result: any) => {
        if (!error) {
            Data_Home.Data_Loa = Result;
        } else {
            return next(error);
        }
    });




    SQL.Loadding_Tainghe((error: string, Result: any) => {
        if (!error) {
            Data_Home.Data_Tainghe = Result;
        } else {
            return next(error);
        }
    });

    SQL.Loadding_Gamming((error: string, Result: any) => {
        if (!error) {
            Data_Home.Data_Gamming = Result;
        } else {
            return next(error);
        }
    });

    SQL.Loadding_Loagiadinh((error: string, Result: any) => {
        if (!error) {
            Data_Home.Data_Loagiadinh = Result;
        } else {
            return next(error);
        }
    });

    SQL.Loadding_Youtube((error: string, Result: any) => {
        if (error) return next(error);
        Data_Home.Youtobe = Result;

        res.status(200).json({
            SQL_Header: Data_Header,
            SQL_Body: Data_Home
        });
    });
};
