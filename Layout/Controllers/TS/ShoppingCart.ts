import { Request, Response, NextFunction } from 'express';
import express from 'express';
import Database_Shopping_Cart from '../Model/ShoppingCart';
import { error } from 'console';
const app = express();
app.use(express.json());
let Connect_Data = new Database_Shopping_Cart();


export const Views = (req: any, res: any, next: any) => {
    res.render('Shoppingcart', {});
}  
            

export const Add = (req: any, res: any, next: any) => {
    let SQL : any = req.body.Data_Pay;   
    let Cookia : number = req.body.Cookia;

        console.log(JSON.stringify(SQL, null, 2));  
    
    Connect_Data.Add (SQL , Cookia , (error : string , result : any) => {
        if (error) return next (error);
        res.send ('Thêm Thành Công nha');
    });

}  