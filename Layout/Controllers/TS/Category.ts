
import { error } from 'console';
import Category from '../Model/Category';
import Home from  '../Model/Home';
let SQL : any = new Category ();
let SQL_Menu : any = new Home ();
   
      
export const View_Category = (req : any , res : any , next : any) => {
   res.render ('Category' , {});
}           



export const Loadding_API_Category = async (req: any, res: any, next: any) => {
    try {
        let Data_Header: any = {};

        Data_Header.Loanghenhac = await new Promise((resolve, reject) => {
            SQL_Menu.Category_Loanghenhac((error: string, Result: any) => {
                if (error) reject(error);
                else resolve(Result);
            });
        });

        Data_Header.Tainghe = await new Promise((resolve, reject) => {
            SQL_Menu.Category_Tainghe((error: string, Result: any) => {
                if (error) reject(error);
                else resolve(Result);
            });
        });   

        Data_Header.Amthanhgiadinh = await new Promise((resolve, reject) => {
            SQL_Menu.Category_Amthanhgiadinh((error: string, Result: any) => {
                if (error) reject(error);
                else resolve(Result);
            });
        });    

        Data_Header.Sanphamgaming = await new Promise((resolve, reject) => {
            SQL_Menu.Category_Sanphamgaming((error: string, Result: any) => {
                if (error) reject(error);
                else resolve(Result);
            });
        });


        Data_Header.Amthanhchuyennghiep = await new Promise((resolve, reject) => {
            SQL_Menu.Categotry_Amthanhchuyennghiep((error: string, Result: any) => {
                if (error) reject(error);
                else resolve(Result);
            });
        });

        res.status(200).json({ Data_Header });
    } catch (error) {
        return next(error);
    }
};






export const Loadding_API = (req : any , res : any , next : any) => {
    let ID_CATEGORY : number = req.params.ID_Action;

    SQL.Loading_Category (ID_CATEGORY , (error : string , Results : any) => {
        if (!error){
            res.status(200).json(
                {Data_Category : Results}
            );
        } else {
            return next (error);
        }
    });
}  
   



export const Fill_Product = (req : any, res : any , next : any) => { 
    const Min_Price  : number = req.params.MIN;
    const Max_Price  : number = req.params.MAX;
    
    SQL.Loading_Fill_Category (Min_Price , Max_Price , (error : string , Results : any) => {
        if (!error){
            res.status(200).json(
                {Data_Category : Results}
            );

            // res.render ('Category' , {});
            
        } else {
            return next (error);      
        }
    });


};
