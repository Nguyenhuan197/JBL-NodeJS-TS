import { error } from 'console';
import Connect from '../SQL/Db';
   
class Detail {
    public ID : number;
    constructor (ID : number){
        this.ID = ID ;
    }
    
    
    Load_Views = (Callback : any) => {
        let Query : string = `SELECT sanpham.Tensp AS Name_Product,
            sanpham.Giaban AS Price,
            sanpham.Tilegiamgia AS Sale,
            sanpham.URL_Youtube AS Youtobe,
            sanpham.Soluongsao AS Count_Star,
            sanpham.Soluongconlai AS Count_Remaining,
            sanpham.Dacdiemnoibat AS Dacdiemnoibat,
            sanpham.id AS ID,
            MIN(anhsp.IMG) AS IMG
        
            FROM sanpham
                INNER JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                    WHERE sanpham.id =?
            GROUP BY sanpham.id
        `;

        Connect.query (Query , [this.ID], (error : any , results : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , results);
            }
        })
    }
    

    Load_IMG = (Callback : any) => {
        let Query : string = `SELECT anhsp.IMG AS IMG 
            FROM anhsp
            INNER JOIN sanpham
                ON anhsp.idsp = sanpham.id
            WHERE sanpham.id =?
        `;

        Connect.query (Query , [this.ID] , (error : any , results : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , results);
            }
        });
    }

   
    Load_Product_Sell_More = (ID : number , Callback : any) => {
        let Query  = `SELECT sanpham.id AS ID,
            sanpham.Tensp AS Name,
            MIN(anhsp.IMG) AS IMG,
            sanpham.Giaban AS Price
            
            FROM sanpham
                LEFT JOIN anhsp
                    ON sanpham.id = anhsp.idsp
                LEFT JOIN loaidanhmuc
                    ON sanpham.id_loaidm = loaidanhmuc.id
                
            WHERE loaidanhmuc.id = (SELECT id_loaidm FROM sanpham WHERE sanpham.id = ?)
            GROUP BY sanpham.id
            LIMIT 4
        `;

        Connect.query (Query , [ID] , (error : string , Result : any) => {
            if (error){
                Callback (error , null);
            } else {
                Callback (null , Result);
            }
        });
    }


   
}


export default Detail;
